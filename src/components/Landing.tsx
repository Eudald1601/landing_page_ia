"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ChatDemo, FlowDemo, HeroBoard, ProblemVisual, SourcesDemo, SummaryDemo } from "./Demos";
import Orb from "./Orb";
import { scrollToProgress, useScrollScenes } from "./useScrollScenes";
import { CONTACT_EMAIL, PERSONAL_EMAIL, copy, languages, type Copy, type Lang } from "@/content/copy";

const sectionIds = ["inici", "situacions", "serveis", "prova", "proces", "sobre", "contacte"];

type Spot = {
  side: "left" | "right";
  x: number; // fracció de l'amplada de la demo on cau el punt
  y: number; // fracció de l'alçada
  tone?: "mint" | "amber" | "rose";
};

// Una escena per servei. Els textos de les notes són a copy.ts, en el mateix ordre que els punts
const scenes: { Demo: (props: { t: Copy }) => React.ReactElement; spots: Spot[] }[] = [
  {
    Demo: FlowDemo,
    spots: [
      { side: "left", x: 0.14, y: 0.17 },
      { side: "left", x: 0.38, y: 0.36, tone: "mint" },
      { side: "right", x: 0.86, y: 0.17 },
      { side: "right", x: 0.9, y: 0.6, tone: "mint" },
    ],
  },
  {
    Demo: SummaryDemo,
    spots: [
      { side: "left", x: 0.22, y: 0.5 },
      { side: "left", x: 0.6, y: 0.33, tone: "mint" },
      { side: "right", x: 0.92, y: 0.7 },
      { side: "right", x: 0.89, y: 0.3, tone: "rose" },
    ],
  },
  {
    Demo: SourcesDemo,
    spots: [
      { side: "left", x: 0.3, y: 0.22 },
      { side: "left", x: 0.54, y: 0.6, tone: "mint" },
      { side: "right", x: 0.9, y: 0.36 },
      { side: "right", x: 0.73, y: 0.865, tone: "rose" },
    ],
  },
];

const vars = (values: Record<string, string | number>) => values as CSSProperties;

function Logo({ withText = true }: { withText?: boolean }) {
  return (
    <a className="brand" href="#inici" aria-label="TasklessAI">
      <Image src="/logo-tasklessai.png" alt="" width={32} height={32} priority />
      {withText && <span>TasklessAI</span>}
    </a>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="kicker">
      <i /> {children}
    </p>
  );
}

export default function Landing({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const [active, setActive] = useState(0);
  const [scene, setScene] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [reduced, setReduced] = useState(false);
  const stageRef = useRef<HTMLElement>(null);

  useScrollScenes({
    stage: (p) => setScene(Math.min(scenes.length - 1, Math.floor(p * scenes.length))),
  });

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(sectionIds.indexOf(entry.target.id));
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotion = () => setReduced(motion.matches);
    onMotion();
    motion.addEventListener("change", onMotion);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      motion.removeEventListener("change", onMotion);
    };
  }, []);

  const goToScene = (index: number) => scrollToProgress(stageRef.current, (index + 0.45) / scenes.length);
  const mailto = `mailto:${PERSONAL_EMAIL}`;

  return (
    <>
      <a className="skip-link" href="#contingut">
        {t.skip}
      </a>

      <header className={`header ${scrolled ? "solid" : ""}`}>
        <Logo />
        <div className="lang-switch" role="group" aria-label={t.nav.language}>
          {languages.map((l) => (
            <Link
              key={l.code}
              href={l.href}
              lang={l.code}
              hrefLang={l.code}
              className={lang === l.code ? "active" : ""}
              aria-current={lang === l.code ? "page" : undefined}
              aria-label={l.name}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <a className="nav-cta" href="#contacte">
          {t.nav.cta}
        </a>
      </header>

      <nav className="dots" aria-label={t.nav.sections}>
        {sectionIds.map((id, i) => (
          <a key={id} href={`#${id}`} className={active === i ? "active" : ""} aria-current={active === i ? "true" : undefined}>
            <span>{t.sections[i]}</span>
          </a>
        ))}
      </nav>

      <main id="contingut">
        {/* 1 · HERO: el text puja i la setmana de feina s'apropa i s'automatitza */}
        <section className="hero" id="inici" data-pin="hero">
          <div className="sticky">
            <div className="hero-grid" aria-hidden="true" />
            <div className="hero-orb">
              <Orb />
            </div>
            <div className="hero-copy">
              <Kicker>{t.hero.kicker}</Kicker>
              <h1>
                {t.hero.title[0]}
                <br />
                {t.hero.title[1]} <em>{t.hero.title[2]}</em> {t.hero.title[3]}
                <br />
                {t.hero.title[4]}
              </h1>
              <p className="lead">{t.hero.lead}</p>
              <div className="hero-actions">
                <a className="button" href="#contacte">
                  {t.hero.cta} <span aria-hidden="true">→</span>
                </a>
                <span className="hero-note">{t.hero.note}</span>
              </div>
              <dl className="hero-stats">
                {t.hero.stats.map(([num, label]) => (
                  <div key={label}>
                    <dt>{num}</dt>
                    <dd>{label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="hero-screen">
              <HeroBoard t={t} />
            </div>
            <a className="scroll-cue" href="#situacions">
              <span /> {t.hero.scroll}
            </a>
          </div>
        </section>

        {/* 2 · CARRIL: les situacions es desplacen de costat */}
        <section className="track-section" id="situacions" data-pin="track">
          <div className="sticky">
            <div className="track" data-track>
              <div className="track-intro">
                <Kicker>{t.track.kicker}</Kicker>
                <h2>
                  {t.track.title[0]}
                  <br />
                  <strong>{t.track.title[1]}</strong>
                </h2>
                <p>{t.track.lead}</p>
              </div>
              {t.track.cards.map(([title, text], i) => (
                <article className="step-card" key={title}>
                  <figure>
                    <ProblemVisual index={i} />
                    <span className="numeral">{String(i + 1).padStart(2, "0")}</span>
                  </figure>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
              <article className="step-card outro-card">
                <div className="outro-inner">
                  <span className="outro-mark" aria-hidden="true">
                    ✦
                  </span>
                  <h3>{t.track.outro[0]}</h3>
                  <p>{t.track.outro[1]}</p>
                </div>
              </article>
            </div>
            <div className="track-progress" aria-hidden="true">
              <span />
            </div>
          </div>
        </section>

        {/* 3 · ESCENARI: un servei per escena, amb notes que entren pels costats */}
        <section className="stage" id="serveis" data-pin="stage" ref={stageRef}>
          <div className="sticky">
            <div className="stage-glow" aria-hidden="true" />
            {scenes.map(({ Demo, spots }, i) => {
              const s = t.stage.scenes[i];
              return (
                <div className="scene" data-scene key={s.tab} aria-hidden={!reduced && scene !== i}>
                  <div className="scene-title">
                    <Kicker>{s.kicker}</Kicker>
                    <h2>{s.title}</h2>
                  </div>
                  <div className="scene-frame">
                    <Demo t={t} />
                    {spots.map((spot, j) => (
                      <div
                        key={j}
                        className={`hotspot ${spot.side}`}
                        data-card
                        style={vars({ "--hx": spot.x, "--hy": spot.y })}
                      >
                        <span className="pin" />
                        <span className="leader" />
                        <div className={`note ${spot.tone ?? ""}`}>
                          <strong>{s.notes[j][0]}</strong>
                          <span>{s.notes[j][1]}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <ul className="scene-notes">
                    {s.notes.map(([label, text]) => (
                      <li key={label}>
                        <strong>{label}</strong> {text}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
            <div className="stage-tabs" role="group" aria-label={t.stage.label}>
              {t.stage.scenes.map((s, i) => (
                <button key={s.tab} className={scene === i ? "active" : ""} aria-pressed={scene === i} onClick={() => goToScene(i)}>
                  <span className="fill" />
                  {s.tab}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 4 · PROVA-HO: l'assistent puja des de baix i el títol es desenfoca */}
        <section className="rise" id="prova" data-pin="rise">
          <div className="sticky">
            <h2 className="rise-title">
              {t.rise.title[0]}
              <br />
              <strong>{t.rise.title[1]}</strong>
            </h2>
            <div className="rise-card">
              <ChatDemo t={t} />
              <div className="rise-caption">
                <Kicker>{t.rise.kicker}</Kicker>
                <p>{t.rise.text}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5 · VENTALL: els quatre passos del procés s'obren */}
        <section className="fan" id="proces" data-pin="fan">
          <div className="sticky">
            <div className="fan-copy">
              <Kicker>{t.fan.kicker}</Kicker>
              <h2>
                {t.fan.title[0]}
                <br />
                <strong>{t.fan.title[1]}</strong>
              </h2>
            </div>
            <div className="fan-cards">
              {t.fan.cards.map(([title, text], i) => (
                <article className="fan-card" key={title} style={vars({ "--i": i - 1.5 })}>
                  <div className="fan-top">
                    <span className="fan-num">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="fan-body">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 6 · QUI SÓC i ADEQUACIÓ: contingut estàtic, per llegir amb calma */}
        <section className="about" id="sobre">
          <div className="about-layout">
            <div>
              <Kicker>{t.about.kicker}</Kicker>
              <h2>
                {t.about.title[0]}
                <em>{t.about.title[1]}</em>
                {t.about.title[2]}
                <br />
                <strong>{t.about.title[3]}</strong>
              </h2>
              {t.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="about-card">
              <div className="about-initials">EB</div>
              <div className="about-name">Eudald Brils</div>
              <div className="about-role">{t.about.role}</div>
              <div className="about-tags">
                {t.about.tags.map((tag) => (
                  <span className="chip" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="fit">
            <Kicker>{t.fit.kicker}</Kicker>
            <h2>{t.fit.title}</h2>
            <div className="fit-grid">
              {[t.fit.yes, t.fit.no].map((group, i) => (
                <div className={`fit-card ${i === 0 ? "yes" : "no"}`} key={group.title}>
                  <h3>
                    <span aria-hidden="true">{i === 0 ? "✓" : "✕"}</span> {group.title}
                  </h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7 · CONTACTE */}
        <section className="closing" id="contacte">
          <div className="closing-orb" aria-hidden="true">
            <Orb density={1400} />
          </div>
          <Kicker>{t.closing.kicker}</Kicker>
          <h2>
            {t.closing.title[0]}
            <br />
            <em>{t.closing.title[1]}</em>
          </h2>
          <p className="lead">{t.closing.lead}</p>
          <div className="closing-actions">
            <a className="button" href={mailto}>
              {t.closing.cta} <span aria-hidden="true">→</span>
            </a>
          </div>
          <p className="closing-note">
            {t.closing.or}{" "}
            <a className="link" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
          </p>
        </section>
      </main>

      <footer>
        <Logo />
        <span>
          © {new Date().getFullYear()} TasklessAI · {t.footer.tagline}
        </span>
        <a href="#inici">{t.footer.top}</a>
      </footer>
    </>
  );
}
