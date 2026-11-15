# TasklessAI — landing

Landing de TasklessAI (consultoria d'IA a Lleida) amb Next.js 16. És un *scrollytelling*: seccions que es
queden fixades mentre fas scroll i s'animen segons quant n'has recorregut. Només tema fosc. En català (`/`) i
castellà (`/es`).

```sh
npm install
npm run dev      # http://localhost:3000
npm run build    # comprova tipus i genera la versió de producció
```

## Seccions

1. **Inici**: esfera de partícules; el text puja i «La teva setmana» s'apropa i les tasques s'automatitzen.
2. **Situacions**: carril horitzontal amb els tres problemes.
3. **Serveis**: escenari fixat amb una escena per servei. Cada escena té una demo i notes que entren pels costats;
   les pestanyes salten d'una a l'altra.
4. **Prova-ho**: l'assistent puja des de baix i la conversa s'escriu a mesura que fas scroll.
5. **Procés**: els quatre passos s'obren en ventall.
6. **Qui sóc**, **adequació** i **contacte**: contingut estàtic.

## On és cada cosa

- `src/content/copy.ts`: **tots els textos**, en català i castellà amb la mateixa estructura.
- `src/components/Landing.tsx`: estructura de la pàgina i posició dels punts d'interès de cada servei
  (`x`/`y` en fraccions de la demo).
- `src/components/Demos.tsx`: les demos fetes amb HTML i CSS (fan el paper de captures de producte). Fan servir
  unitats de contenidor (`cqw`), així escalen com una imatge.
- `src/components/useScrollScenes.ts`: motor de scroll. Cada `[data-pin]` rep `--p` (0 → 1); les escenes reben
  `--e`/`--x` i les notes `--c`. Tot el moviment es fa al CSS amb aquestes variables.
- `src/components/Orb.tsx`: l'esfera de partícules (canvas, sense recursos externs).
- `src/app/globals.css`: disseny, responsive i moviment reduït (amb `prefers-reduced-motion` tot es mostra estàtic).

## Cloudflare Web Analytics

La variable d'entorn `NEXT_PUBLIC_CF_BEACON_TOKEN` activa el beacon oficial de Cloudflare Web Analytics
(`static.cloudflareinsights.com/beacon.min.js`, amb `defer` i `data-cf-beacon`) dins del `<head>` de totes les
pàgines. El component és `src/app/cloudflare-beacon.tsx` i només l'importa `src/app/layout.tsx`.

- **Sense token** (variable absent, buida o només amb espais) no es renderitza res i la web queda com abans.
- El token es llegeix **en temps de build**: no s'ha d'escriure mai al codi ni a cap fitxer del repo.
  `.env.example` només mostra el nom de la variable, buida.

**Com activar-la al desplegament:**

1. Al dashboard de Cloudflare (Web Analytics → afegir el lloc), tria el **fragment JS** i copia'n el token.
2. Afegeix la variable `NEXT_PUBLIC_CF_BEACON_TOKEN`, amb el token com a valor, a les variables d'entorn de
   **producció** del desplegament.
3. Torna a fer el build i el desplegament: com que és una variable `NEXT_PUBLIC_*`, el valor queda dins del
   build i un canvi de valor no té efecte fins al build següent.

**Com comprovar-ho:**

- A la web publicada, mira el codi font de la pàgina i cerca `beacon.min.js`: ha de sortir una sola etiqueta
  `<script>` dins del `<head>`.
- En local, `npm run test:analytics` fa builds amb valors de prova (`test-token-…`) i sense token, i acaba amb
  codi 0 si tot passa (opcions: `--only=token,absent`, `--out=<fitxer>`).

**Atenció:** si el domini passa pel proxy de Cloudflare, **no activis la configuració automàtica** (injecció
automàtica del beacon a l'edge): hi hauria dos beacons. Fes servir només el mode de fragment JS amb aquesta
variable.

Ara mateix la web no té cap Content-Security-Policy; si se n'afegeix una, ha de permetre
`static.cloudflareinsights.com` (script) i `cloudflareinsights.com` (connexió).
