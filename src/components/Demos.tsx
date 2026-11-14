// Demos fetes amb HTML i CSS que fan el paper de les captures de producte.
// Totes fan servir unitats de contenidor (cqw): escalen com una imatge i els punts d'interès
// (fraccions x/y de Landing.tsx) cauen sempre al mateix lloc.

import type { CSSProperties } from "react";
import type { Copy } from "@/content/copy";

const vars = (values: Record<string, string | number>) => values as CSSProperties;

/** Hero: la setmana de l'usuari, on les tasques es van automatitzant a mesura que fas scroll. */
export function HeroBoard({ t }: { t: Copy }) {
  const b = t.hero.board;
  return (
    <div className="board">
      <div className="window-bar">
        <i />
        <i />
        <i />
        <span>{b.title}</span>
      </div>
      <ul className="board-tasks">
        {b.tasks.map(([task, hours], k) => (
          <li key={task} style={vars({ "--k": k })}>
            <span className="board-check" aria-hidden="true" />
            <span className="board-task">
              {task}
              <span className="board-strike" aria-hidden="true" />
            </span>
            <span className="board-hours">{hours}</span>
            <span className="board-auto">⚡ {b.auto}</span>
          </li>
        ))}
      </ul>
      <div className="board-saved">{b.saved}</div>
    </div>
  );
}

/** Carril: una il·lustració per a cada situació. */
export function ProblemVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="pv pv-docs" aria-hidden="true">
        {[0, 1, 2].map((page) => (
          <div className="pv-page" key={page} style={vars({ "--n": page })}>
            {Array.from({ length: 9 }, (_, line) => (
              <i key={line} style={vars({ "--w": `${55 + ((line * 37 + page * 11) % 40)}%` })} />
            ))}
          </div>
        ))}
        <div className="pv-clock">
          <span />
        </div>
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className="pv pv-loop" aria-hidden="true">
        {Array.from({ length: 5 }, (_, row) => (
          <div className="pv-row" key={row} style={vars({ "--n": row })}>
            <i>Excel</i>
            <b>→</b>
            <i>Email</i>
            <b>→</b>
            <i>CRM</i>
          </div>
        ))}
        <div className="pv-repeat">↻</div>
      </div>
    );
  }
  return (
    <div className="pv pv-scatter" aria-hidden="true">
      {["PDF", "Notion", "Drive", "Gmail", "Excel", "WhatsApp"].map((name, n) => (
        <span key={name} className="pv-chip" style={vars({ "--n": n })}>
          {name}
        </span>
      ))}
      <div className="pv-question">?</div>
    </div>
  );
}

/** Servei 01: un correu es converteix en una fila al full de càlcul i una resposta, sense intervenció. */
export function FlowDemo({ t }: { t: Copy }) {
  return (
    <div className="demo demo-flow">
      <div className="flow-nodes">
        {t.demos.flow.map(([title, detail], n) => (
          <div className={`flow-node ${n === 1 ? "is-ai" : ""}`} key={title} style={vars({ "--n": n })}>
            <span className="flow-icon">{["✉", "✦", "▦", "✓"][n]}</span>
            <strong>{title}</strong>
            <span>{detail}</span>
          </div>
        ))}
        <div className="flow-wire" aria-hidden="true">
          <span />
        </div>
      </div>
      <ul className="flow-rows">
        {t.demos.flowRows.map(([time, client, detail]) => (
          <li key={time}>
            <span className="flow-time">{time}</span>
            <strong>{client}</strong>
            <span>{detail}</span>
            <span className="flow-ok">✓</span>
          </li>
        ))}
      </ul>
      <div className="flow-log">
        <span className="live-dot" />
        {t.demos.flowLog}
      </div>
    </div>
  );
}

/** Servei 02: un document llarg i el seu resum amb punts clau i accions. */
export function SummaryDemo({ t }: { t: Copy }) {
  const d = t.demos;
  return (
    <div className="demo demo-summary">
      <div className="sum-doc">
        <div className="sum-doc-name">{d.doc.name}</div>
        <div className="sum-doc-lines" aria-hidden="true">
          {Array.from({ length: 16 }, (_, line) => (
            <i key={line} style={vars({ "--w": `${50 + ((line * 29) % 48)}%` })} />
          ))}
        </div>
      </div>
      <div className="sum-arrow" aria-hidden="true">
        →
      </div>
      <div className="sum-card">
        <div className="sum-head">
          <strong>{d.doc.summary}</strong>
          <span className="chip">1 min</span>
        </div>
        <div className="sum-label">{d.doc.points}</div>
        <ul className="sum-points">
          {d.summaryPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <div className="sum-label">{d.doc.actions}</div>
        <ul className="sum-actions">
          {d.summaryActions.map(([action, who]) => (
            <li key={action}>
              <span className="box" aria-hidden="true" />
              <span>{action}</span>
              <em>{who}</em>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** Servei 03: les fonts de l'empresa connectades a un índex que fa servir l'assistent. */
export function SourcesDemo({ t }: { t: Copy }) {
  const d = t.demos;
  return (
    <div className="demo demo-sources">
      <ul className="src-list">
        {d.sources.map((source, n) => (
          <li key={source} style={vars({ "--n": n })}>
            <span className="src-icon">{["▤", "△", "◧", "✉"][n]}</span>
            {source}
          </li>
        ))}
      </ul>
      <svg className="src-wires" viewBox="0 0 100 62.5" preserveAspectRatio="none" aria-hidden="true">
        {[13, 25, 37, 49].map((y) => (
          <path key={y} d={`M31 ${y} C 40 ${y}, 40 31, 47 31`} />
        ))}
        <path d="M61 31 L 68 31" />
      </svg>
      <div className="src-index">
        <span className="src-core">✦</span>
        <strong>{d.indexLabel}</strong>
        <span>{d.indexStat}</span>
      </div>
      <div className="src-chat">
        <div className="bubble user">{t.rise.chat.question}</div>
        <div className="bubble bot">
          {t.rise.chat.answer.split(".")[0]}.
          <span className="cite">{t.rise.chat.source}</span>
        </div>
        <div className="src-langs">
          <span className="chip">CA</span>
          <span className="chip">ES</span>
        </div>
      </div>
    </div>
  );
}

/** Secció «Prova-ho»: la conversa es va escrivint a mesura que la targeta puja. */
export function ChatDemo({ t }: { t: Copy }) {
  const c = t.rise.chat;
  return (
    <div className="demo demo-chat">
      <div className="window-bar">
        <i />
        <i />
        <i />
        <span>{c.header}</span>
      </div>
      <div className="chat-body">
        <div className="bubble user chat-q">{c.question}</div>
        <div className="chat-typing" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="bubble bot chat-a">
          {c.answer}
          <span className="cite">📄 {c.source}</span>
        </div>
      </div>
      <div className="chat-input">
        <span>{c.placeholder}</span>
        <b>↑</b>
      </div>
    </div>
  );
}
