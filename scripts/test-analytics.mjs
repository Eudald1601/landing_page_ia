#!/usr/bin/env node
// Verificació de Cloudflare Web Analytics (beacon al <head> del layout arrel).
// Per a cada cas fa un build net amb un valor de PROVA de NEXT_PUBLIC_CF_BEACON_TOKEN i inspecciona l'HTML.
// Només fa servir mòduls nadius de Node (cap dependència nova).
//
// Ús:   node scripts/test-analytics.mjs [--only=token,special,...] [--out=<fitxer>] [--keep]
// Codis: 0 tots els casos passen · 1 algun cas falla · 2 error de preparació.

import { spawn, spawnSync } from "node:child_process";
import fs from "node:fs";
import net from "node:net";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { isDeepStrictEqual } from "node:util";

const VAR = "NEXT_PUBLIC_CF_BEACON_TOKEN";
const BEACON_URL = "static.cloudflareinsights.com/beacon.min.js";
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const IS_WIN = process.platform === "win32";
const SPECIAL = "test-token-ab\"c<d&'</script>";

// Taula de casos (valors de prova evidents, mai un token real).
const CASES = [
  { name: "token", value: "test-token-123", expected: "test-token-123", criteria: "CA1.1, CA1.2, CA1.3" },
  { name: "special", value: SPECIAL, expected: SPECIAL, criteria: "CA1.4", extra: checkSpecial },
  { name: "padded", value: "  test-token-123  ", expected: "test-token-123", criteria: "retall d'espais" },
  // Sense token (absent, buit o només espais): cap HTML pot contenir la cadena (CA2.x es verifica per cadena, decisió 8).
  // Van al final perquè l'últim build que queda a .next sigui un build sense token.
  { name: "absent", value: undefined, expected: null, criteria: "CA2.1" },
  { name: "empty", value: "", expected: null, criteria: "CA2.2" },
  { name: "blank", value: "   ", expected: null, criteria: "CA2.2" },
];

class PrepError extends Error {}

// ---------- preparació ----------

function parseArgs(argv) {
  const opts = { only: null, out: null, keep: false };
  for (const a of argv) {
    if (a.startsWith("--only=")) opts.only = a.slice(7).split(",").map((s) => s.trim()).filter(Boolean);
    else if (a.startsWith("--out=")) opts.out = path.resolve(process.cwd(), a.slice(6));
    else if (a === "--keep") opts.keep = true;
    else throw new PrepError(`opció desconeguda: ${a}`);
  }
  return opts;
}

function selectCases(only) {
  if (!only) return CASES;
  const unknown = only.filter((n) => !CASES.some((c) => c.name === n));
  if (unknown.length) throw new PrepError(`casos desconeguts: ${unknown.join(", ")} (disponibles: ${CASES.map((c) => c.name).join(", ")})`);
  return CASES.filter((c) => only.includes(c.name));
}

const LOCKFILES = [
  ["package-lock.json", "npm"],
  ["pnpm-lock.yaml", "pnpm"],
  ["yarn.lock", "yarn"],
  ["bun.lock", "bun"],
  ["bun.lockb", "bun"],
];

function detectManager() {
  const found = LOCKFILES.find(([f]) => fs.existsSync(path.join(ROOT, f)));
  if (!found) throw new PrepError("no hi ha cap lockfile: no es pot saber el gestor de paquets");
  const [, manager] = found;
  const r = spawnSync(manager, ["--version"], { cwd: ROOT, encoding: "utf8", shell: IS_WIN });
  if (r.error || r.status !== 0) throw new PrepError(`no es troba el gestor "${manager}" al PATH`);
  return { manager, version: r.stdout.trim() };
}

function checkNodeModules() {
  const nextPkg = path.join(ROOT, "node_modules", "next", "package.json");
  if (!fs.existsSync(nextPkg)) throw new PrepError("falta node_modules (cal instal·lar amb el lockfile congelat, p. ex. npm ci)");
  return {
    nextVersion: JSON.parse(fs.readFileSync(nextPkg, "utf8")).version,
    nextBin: path.join(ROOT, "node_modules", "next", "dist", "bin", "next"),
  };
}

// Fitxers d'entorn que `next build` carrega (l'entorn del procés té prioritat, però al cas `absent`
// un d'aquests fitxers amb la variable falsejaria el resultat). `.env.example` no el carrega Next.
const ENV_FILES = [".env", ".env.local", ".env.production", ".env.production.local"];

// Assignacions a l'estil dotenv: `VAR=valor`, `export VAR=valor`, `VAR: valor`, amb cometes o comentari final.
const ENV_ASSIGN = new RegExp(
  String.raw`^[ \t]*(?:export[ \t]+)?` + VAR + String.raw`(?:[ \t]*=[ \t]*|:[ \t]+)('(?:\\'|[^'])*'|"(?:\\"|[^"])*"|` +
    "`(?:\\\\`|[^`])*`" + String.raw`|[^#\r\n]*)`,
  "gm",
);

// Cert si el text defineix la variable amb un valor no buit (després de treure cometes i espais, com fa el component).
function definesToken(text) {
  for (const m of text.matchAll(ENV_ASSIGN)) {
    let v = m[1].trim();
    if (v.length >= 2 && /^['"`]/.test(v) && v.endsWith(v[0])) v = v.slice(1, -1);
    if (v.trim() !== "") return true;
  }
  return false;
}

// Retorna els fitxers d'entorn de `dir` que defineixen la variable amb valor no buit.
function envFilesWithToken(dir) {
  return ENV_FILES.filter((f) => {
    const p = path.join(dir, f);
    return fs.existsSync(p) && fs.statSync(p).isFile() && definesToken(fs.readFileSync(p, "utf8"));
  });
}

function checkEnvFiles() {
  const bad = envFilesWithToken(ROOT);
  // No es mostra el valor: podria ser un token real.
  if (bad.length)
    throw new PrepError(
      `${bad.join(", ")} defineix ${VAR} amb un valor no buit. Next el carregaria en fer el build i falsejaria ` +
        `els casos sense token (absent, empty, blank). Treu-la o deixa-la buida (${VAR}=) abans de verificar.`,
    );
}

function gitCommit() {
  const r = spawnSync("git", ["rev-parse", "HEAD"], { cwd: ROOT, encoding: "utf8" });
  return r.status === 0 ? r.stdout.trim() : "— (sense git)";
}

// ---------- build i recollida d'HTML ----------

function clean() {
  for (const d of [".next", "out"]) fs.rmSync(path.join(ROOT, d), { recursive: true, force: true });
}

function caseEnv(value) {
  const env = { ...process.env };
  delete env[VAR];
  if (value !== undefined) env[VAR] = value; // el valor va per env, mai interpolat en una línia de shell
  env.NEXT_TELEMETRY_DISABLED = "1";
  return env;
}

function build(manager, env) {
  const t0 = Date.now();
  const r = spawnSync(manager, ["run", "build"], {
    cwd: ROOT,
    env,
    shell: IS_WIN,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  return {
    status: r.error ? null : r.status,
    error: r.error?.message,
    seconds: ((Date.now() - t0) / 1000).toFixed(1),
    output: `${r.stdout ?? ""}${r.stderr ?? ""}`,
  };
}

function walkHtml(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkHtml(p, acc);
    else if (e.name.endsWith(".html")) acc.push(p);
  }
  return acc;
}

function collectHtml() {
  const dirs = [path.join(ROOT, ".next", "server", "app"), path.join(ROOT, ".next", "server", "pages"), path.join(ROOT, "out")];
  return dirs
    .flatMap((d) => walkHtml(d))
    .sort()
    .map((p) => ({ rel: path.relative(ROOT, p).split(path.sep).join("/"), html: fs.readFileSync(p, "utf8") }));
}

function freePort() {
  return new Promise((resolve, reject) => {
    const srv = net.createServer();
    srv.unref();
    srv.on("error", reject);
    srv.listen(0, "127.0.0.1", () => {
      const { port } = srv.address();
      srv.close(() => resolve(port));
    });
  });
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function killTree(child) {
  try {
    if (IS_WIN) child.kill();
    else process.kill(-child.pid, "SIGTERM");
  } catch {
    // el procés ja ha acabat
  }
}

// Alternativa per si `/` és dinàmica: `next start` en un port lliure, amb el mateix entorn.
async function fetchRootViaStart(nextBin, env) {
  const port = await freePort();
  const child = spawn(process.execPath, [nextBin, "start", "-H", "127.0.0.1", "-p", String(port)], {
    cwd: ROOT,
    env,
    detached: !IS_WIN,
    stdio: "ignore",
  });
  try {
    const deadline = Date.now() + 60_000;
    while (Date.now() < deadline) {
      if (child.exitCode !== null) throw new Error(`next start ha acabat amb codi ${child.exitCode}`);
      try {
        const res = await fetch(`http://127.0.0.1:${port}/`);
        if (res.status === 200) return await res.text();
      } catch {
        // encara no escolta
      }
      await sleep(500);
    }
    throw new Error("next start no ha respost 200 a / en 60 s");
  } finally {
    killTree(child);
  }
}

async function rootHtml(files, nextBin, env) {
  const prerendered = files.find((f) => f.rel === ".next/server/app/index.html" || f.rel === "out/index.html");
  if (prerendered) return { source: prerendered.rel, html: prerendered.html };
  return { source: "next start + GET / (ruta dinàmica)", html: await fetchRootViaStart(nextBin, env) };
}

// ---------- parser d'HTML ----------

const NAMED = { quot: '"', amp: "&", lt: "<", gt: ">", apos: "'" };

export function unescapeHtml(s) {
  return s.replace(/&(#x[0-9a-f]+|#[0-9]+|[a-z]+);/gi, (m, e) => {
    if (e[0] === "#") {
      const cp = e[1] === "x" || e[1] === "X" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
      return cp <= 0x10ffff ? String.fromCodePoint(cp) : m;
    }
    return NAMED[e.toLowerCase()] ?? m;
  });
}

function parseAttrs(s) {
  const attrs = new Map();
  const re = /([^\s"'=<>/]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  for (const m of s.matchAll(re)) {
    const name = m[1].toLowerCase();
    if (attrs.has(name)) continue; // HTML es queda el primer
    const raw = m[2] ?? m[3] ?? m[4] ?? null;
    attrs.set(name, { raw, value: raw === null ? null : unescapeHtml(raw) });
  }
  return attrs;
}

// Compta per etiquetes <script>, no per cadena: el payload RSC també conté la URL (decisió 8).
function analyse(html) {
  const head = /<head\b[^>]*>/i.exec(html);
  const headStart = head ? head.index : -1;
  const headEnd = head ? html.toLowerCase().indexOf("</head>", headStart) : -1;
  const scripts = [...html.matchAll(/<script\b((?:[^>"']|"[^"]*"|'[^']*')*)>/gi)].map((m) => ({
    index: m.index,
    attrs: parseAttrs(m[1]),
  }));
  const beacons = scripts
    .filter((s) => s.attrs.get("src")?.value?.includes(BEACON_URL))
    .map((s) => ({ ...s, inHead: headStart >= 0 && headEnd > s.index && s.index > headStart }));
  return {
    htmlTag: /<html\b[^>]*>/i.exec(html)?.[0] ?? null,
    hasHead: headStart >= 0 && headEnd > headStart,
    beacons,
    scriptOpen: (html.match(/<script\b/gi) ?? []).length,
    scriptClose: (html.match(/<\/script\s*>/gi) ?? []).length,
  };
}

// ---------- comprovacions ----------

function beaconChecks(k, ctx, add) {
  const a = ctx.root.analysis;
  add("CA1.1", a.hasHead && a.beacons.length === 1 && a.beacons[0].inHead,
    `/ té ${a.beacons.length} etiqueta(es) <script src="…${BEACON_URL}">; dins del <head>: ${a.beacons.filter((b) => b.inHead).length}`);
  const b = a.beacons[0];
  if (!b) return;
  const defer = b.attrs.get("defer");
  add("CA1.2", !!defer && (defer.raw === null || defer.raw === ""),
    defer ? `defer present (${defer.raw === null ? "defer" : `defer="${defer.raw}"`})` : "falta l'atribut defer");
  const cfb = b.attrs.get("data-cf-beacon");
  let parsed;
  let err = null;
  try {
    parsed = JSON.parse(cfb?.value ?? "");
  } catch (e) {
    err = e.message;
  }
  add("CA1.2", !err && isDeepStrictEqual(parsed, { token: k.expected }),
    cfb ? (err ? `data-cf-beacon no és JSON vàlid: ${err}` : `data-cf-beacon = ${JSON.stringify(parsed)}; esperat ${JSON.stringify({ token: k.expected })}`) : "falta l'atribut data-cf-beacon");
  ctx.beaconAttr = cfb;
}

function pagesChecks(ctx, add, notes) {
  // Pàgines que fan servir el layout arrel: el seu <html> és idèntic al de `/` (decisió 9).
  const layoutTag = ctx.root.analysis.htmlTag;
  const wrong = [];
  let count = 0;
  for (const f of ctx.files) {
    const a = analyse(f.html);
    if (layoutTag && a.htmlTag === layoutTag) {
      count++;
      if (a.beacons.length !== 1) wrong.push(`${f.rel}: ${a.beacons.length}`);
    } else {
      notes.push(`exclòs: ${f.rel} (no usa el layout arrel; etiquetes beacon: ${a.beacons.length})`);
      if (a.beacons.length > 1) wrong.push(`${f.rel} (exclòs): ${a.beacons.length}`);
    }
  }
  add("CA1.3", count > 0 && wrong.length === 0,
    wrong.length ? `pàgines sense exactament 1 beacon: ${wrong.join("; ")}` : `${count} pàgina(es) amb el layout arrel, totes amb exactament 1 beacon`);
}

function checkSpecial(k, ctx, add) {
  const raw = ctx.beaconAttr?.raw ?? "";
  add("CA1.4", ctx.beaconAttr && !raw.includes("<") && !raw.includes('"'),
    `valor cru de data-cf-beacon sense "<" ni '"': ${JSON.stringify(raw)}`);
  const leaked = ctx.files.filter((f) => f.html.includes('ab"c<d')).map((f) => f.rel);
  if (!ctx.files.some((f) => f.html === ctx.root.html) && ctx.root.html.includes('ab"c<d')) leaked.push("/");
  add("CA1.4", leaked.length === 0, leaked.length ? `subcadena literal ab"c<d a: ${leaked.join(", ")}` : `cap HTML conté la subcadena literal ab"c<d`);
  const a = ctx.root.analysis;
  add("CA1.4", a.scriptOpen === a.scriptClose, `obertures <script: ${a.scriptOpen}; tancaments </script>: ${a.scriptClose}`);
}

function noTokenChecks(k, ctx, add) {
  const hits = ctx.files.filter((f) => f.html.includes("cloudflareinsights")).map((f) => f.rel);
  if (!ctx.files.some((f) => f.html === ctx.root.html) && ctx.root.html.includes("cloudflareinsights")) hits.push("/ (next start)");
  add(k.criteria, ctx.files.length > 0 && hits.length === 0,
    hits.length
      ? `contenen "cloudflareinsights": ${hits.join(", ")}`
      : `cap dels ${ctx.files.length} HTML recollits (ni el de /) conté "cloudflareinsights"`);
}

async function runCase(k, env, nextBin, manager) {
  const lines = [];
  const checks = [];
  const add = (crit, ok, detail) => checks.push({ crit, ok: !!ok, detail });
  clean();
  const b = build(manager, env);
  lines.push(`  build: ${b.status === null ? `error (${b.error})` : `codi ${b.status}`} (${b.seconds} s)`);
  add(k.expected === null ? k.criteria : "CA1.1", b.status === 0, `${manager} run build acaba amb codi ${b.status}`);
  if (b.status !== 0) {
    lines.push(...b.output.trimEnd().split("\n").slice(-20).map((l) => `    | ${l}`));
  } else {
    try {
      const files = collectHtml();
      const root = await rootHtml(files, nextBin, env);
      const ctx = { files, root: { ...root, analysis: analyse(root.html) } };
      lines.push(`  HTML de /: ${root.source}`);
      lines.push(`  HTML recollits: ${files.map((f) => f.rel).join(", ") || "cap"}`);
      const notes = [];
      if (k.expected === null) {
        noTokenChecks(k, ctx, add);
      } else {
        beaconChecks(k, ctx, add);
        pagesChecks(ctx, add, notes);
        if (k.extra) k.extra(k, ctx, add);
      }
      lines.push(...notes.map((n) => `  ${n}`));
    } catch (e) {
      add("—", false, `error inesperat: ${e.message}`);
    }
  }
  const ok = checks.every((c) => c.ok);
  return { ok, lines: [...lines, ...checks.map((c) => `  ${c.ok ? "PASS" : "FAIL"} ${c.crit} · ${c.detail}`), `  => ${ok ? "PASS" : "FAIL"}`] };
}

// ---------- principal ----------

async function main() {
  const out = [];
  const log = (l = "") => {
    out.push(l);
    console.log(l);
  };
  let opts = { out: null, keep: false };
  const finish = (code) => {
    if (opts.out) {
      fs.mkdirSync(path.dirname(opts.out), { recursive: true });
      fs.writeFileSync(opts.out, `${out.join("\n")}\n`);
    }
    process.exitCode = code;
  };

  let cases, manager, nextBin;
  log("# test-analytics · Cloudflare Web Analytics");
  try {
    opts = parseArgs(process.argv.slice(2));
    cases = selectCases(opts.only);
    const m = detectManager();
    manager = m.manager;
    const n = checkNodeModules();
    nextBin = n.nextBin;
    checkEnvFiles();
    log(`Data: ${new Date().toISOString()}`);
    log(`Node: ${process.version}`);
    log(`Next: ${n.nextVersion}`);
    log(`Gestor: ${manager} ${m.version}`);
    log(`Commit: ${gitCommit()}`);
    log(`Casos: ${cases.map((c) => c.name).join(", ")}`);
  } catch (e) {
    if (!(e instanceof PrepError)) throw e;
    log(`ERROR de preparació: ${e.message}`);
    return finish(2);
  }

  const results = [];
  try {
    for (const k of cases) {
      log();
      log(`## ${k.name} (${k.criteria}) · ${VAR}=${k.value === undefined ? "(absent)" : JSON.stringify(k.value)}`);
      const r = await runCase(k, caseEnv(k.value), nextBin, manager);
      r.lines.forEach((l) => log(l));
      results.push({ name: k.name, ok: r.ok });
    }
  } finally {
    if (!opts.keep) clean(); // no deixa cap build de prova amb token a .next
  }

  log();
  log("## Resum");
  results.forEach((r) => log(`${r.ok ? "PASS" : "FAIL"} ${r.name}`));
  const passed = results.filter((r) => r.ok).length;
  log(`${passed}/${results.length} casos passen`);
  return finish(passed === results.length ? 0 : 1);
}

main().catch((e) => {
  console.error(`ERROR inesperat: ${e.stack ?? e}`);
  process.exitCode = 2;
});
