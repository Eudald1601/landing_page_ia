import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TasklessAI | Consultoria IA a Lleida",
  description:
    "Consultoria d'IA a Lleida per a freelancers i petites empreses. Automatitzacions de tasques repetitives, resums d'informes i assistents interns.",
};

const problems = [
  {
    icon: "⏳",
    title: "Perds hores llegint informes",
    desc: "Documents llargs, actes de reunió, informes periòdics... tota setmana consumint temps que podries dedicar al que importa de debò.",
  },
  {
    icon: "🔁",
    title: "Les mateixes tasques cada setmana",
    desc: "Copies dades d'un lloc a un altre, actualitzes fulls de càlcul, envies emails iguals... una i altra vegada, sense que ningú ho resolgui.",
  },
  {
    icon: "🗂️",
    title: "La informació, dispersa per tot arreu",
    desc: "PDFs, Notion, Google Drive, correus... trobar una dada senzilla es converteix en una expedició de deu minuts.",
  },
];

const services = [
  {
    num: "01",
    icon: "⚡",
    title: "Automatització de tasques",
    tagline: "Ideal si repeteixes les mateixes accions cada setmana",
    bullets: [
      "Analitzem el teu procés actual",
      "Dissenyo l'automatització a mida amb IA",
      "Funciona sola, sense que hagis de tocar res",
    ],
  },
  {
    num: "02",
    icon: "📋",
    title: "Resums intel·ligents",
    tagline: "Ideal si treballes amb documents llargs o informes",
    bullets: [
      "Sistema que resumeix documents i reunions",
      "Mostra el que importa i les properes accions",
      "Adaptat al teu to i format de treball",
    ],
  },
  {
    num: "03",
    icon: "💬",
    title: "Assistent intern documental",
    tagline: "Ideal si esteu cansats de buscar informació a mà",
    bullets: [
      "Centralitzem tota la teva documentació",
      "Assistent amb IA que entén el teu contingut",
      "Preguntes en català o castellà",
    ],
  },
];

const steps = [
  {
    num: "01",
    title: "Trucada introductòria",
    desc: "20 min per entendre com treballes i on perds temps",
  },
  {
    num: "02",
    title: "Proposta simple",
    desc: "Solució concreta, temps estimat i preu tancat",
  },
  {
    num: "03",
    title: "Implementació",
    desc: "Em faig càrrec de la part tècnica completament",
  },
  {
    num: "04",
    title: "Entrega i ajustos",
    desc: "T'ensenyo com funciona i finem els detalls junts",
  },
];

export default function Home() {
  return (
    <main className="site-main">

      {/* ─── NAV ─── */}
      <nav className="site-nav">
        <div className="container nav-inner">
          <div className="nav-logo">
            <span className="nav-logo-mark">T</span>
            TasklessAI
          </div>
          <div className="nav-links">
            <Link href="/" className="nav-link nav-link--active">Català</Link>
            <Link href="/es" className="nav-link">Castellano</Link>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-grid" />
        <div className="container hero-content">
          <div className="hero-badge fade-up-1">
            <span className="hero-badge-dot" />
            IA · Lleida · Catalunya
          </div>
          <h1 className="hero-title fade-up-2">
            Automatitzacions<br />
            amb <em className="text-amber">IA</em> per al<br />
            teu negoci
          </h1>
          <p className="hero-sub fade-up-3">
            Desenvolupo solucions d&apos;IA a mida per estalviar-te hores de feina
            repetitiva: resums d&apos;informes, automatitzacions de processos i
            assistents interns sobre la teva documentació.
          </p>
          <div className="hero-actions fade-up-4">
            <a href="#contact" className="btn-primary">
              Reserva 20 min gratuïts
              <span className="btn-arrow">→</span>
            </a>
            <span className="hero-note">Sense compromís, només veiem si et puc ajudar.</span>
          </div>
          <div className="hero-stats fade-up-5">
            <div className="hero-stat">
              <span className="hero-stat-num">3</span>
              <span className="hero-stat-label">Serveis clars</span>
            </div>
            <div className="hero-stat-div" />
            <div className="hero-stat">
              <span className="hero-stat-num">20&apos;</span>
              <span className="hero-stat-label">Primera trucada</span>
            </div>
            <div className="hero-stat-div" />
            <div className="hero-stat">
              <span className="hero-stat-num">0€</span>
              <span className="hero-stat-label">Sense compromís</span>
            </div>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <div className="scroll-indicator" />
        </div>
      </section>

      {/* ─── PROBLEMES ─── */}
      <section className="section section--dark" id="problemes">
        <div className="container">
          <div className="section-intro scroll-reveal">
            <div className="section-label">Per a qui és</div>
            <h2 className="section-title">
              Reconeixeràs alguna<br />d&apos;aquestes situacions?
            </h2>
            <div className="section-divider" />
            <p className="section-sub">
              Treballo amb professionals independents i petites empreses de Lleida i
              Catalunya que volen treure profit de la IA sense necessitat d&apos;un gran
              equip tècnic.
            </p>
          </div>
          <div className="problems-grid">
            {problems.map((p, i) => (
              <div key={i} className="problem-card scroll-reveal">
                <div className="problem-icon">{p.icon}</div>
                <h3 className="problem-title">{p.title}</h3>
                <p className="problem-desc">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="section-note scroll-reveal">
            No cal que siguis &quot;tecnològic&quot;. Tu m&apos;expliques com treballes i jo
            busco on l&apos;IA et pot estalviar temps.
          </p>
        </div>
      </section>

      {/* ─── SERVEIS ─── */}
      <section className="section" id="serveis">
        <div className="container">
          <div className="section-intro scroll-reveal">
            <div className="section-label">Serveis</div>
            <h2 className="section-title">Què puc fer per al teu negoci</h2>
            <div className="section-divider" />
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card scroll-reveal">
                <span className="service-num">{s.num}</span>
                <div className="service-icon">{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-tagline">{s.tagline}</p>
                <ul className="service-list">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="service-list-item">
                      <span className="service-list-marker" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCÉS ─── */}
      <section className="section section--alt" id="proces">
        <div className="container">
          <div className="section-intro scroll-reveal">
            <div className="section-label">Com treballo</div>
            <h2 className="section-title">Senzill per a tu, potent per al resultat</h2>
            <div className="section-divider" />
          </div>
          <div className="process-grid">
            {steps.map((step, i) => (
              <div key={i} className="process-step scroll-reveal">
                <div className="process-num">{step.num}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOBRE MI ─── */}
      <section className="section" id="sobre">
        <div className="container">
          <div className="about-layout scroll-reveal">
            <div className="about-text">
              <div className="section-label">Qui sóc</div>
              <h2 className="section-title">
                Sóc <em className="text-amber">Eudald Brils</em>,<br />
                consultor IA full stack
              </h2>
              <div className="section-divider" />
              <p className="body-text">
                Treballo en consultoria tecnològica i, a banda, ajudo petites empreses i
                professionals a automatitzar processos repetitius, integrar IA als seus
                fluxos de treball i guanyar temps sense haver de contractar un gran equip
                tècnic.
              </p>
              <p className="body-text" style={{ marginTop: "1.25rem" }}>
                Si m&apos;expliques el teu dia a dia en llenguatge normal, en tinc prou per
                entendre el teu procés i buscar-hi millores concretes.
              </p>
            </div>
            <div className="about-visual">
              <div className="about-card">
                <div className="about-card-accent" />
                <div className="about-initials">EB</div>
                <div className="about-name">Eudald Brils</div>
                <div className="about-role">Full Stack AI Consultant</div>
                <div className="about-tags">
                  <span className="tag">IA aplicada</span>
                  <span className="tag">Automatització</span>
                  <span className="tag">RAG / LLMs</span>
                  <span className="tag">Lleida · Catalunya</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ADEQUACIÓ ─── */}
      <section className="section section--dark" id="adequacio">
        <div className="container">
          <div className="section-intro scroll-reveal">
            <div className="section-label">Adequació</div>
            <h2 className="section-title">Aquest servei és per tu si…</h2>
            <div className="section-divider" />
          </div>
          <div className="fit-grid">
            <div className="fit-card fit-card--yes scroll-reveal">
              <div className="fit-header">
                <span className="fit-icon">✓</span>
                <h3 className="fit-title">És per tu si</h3>
              </div>
              <ul className="fit-list">
                <li>Vols estalviar temps en tasques repetitives i avorrides</li>
                <li>Estàs obert a provar solucions noves amb IA</li>
                <li>Prefereixes un projecte petit i concret a un macroprojecte IT</li>
              </ul>
            </div>
            <div className="fit-card fit-card--no scroll-reveal">
              <div className="fit-header">
                <span className="fit-icon fit-icon--no">✕</span>
                <h3 className="fit-title">No és per tu si</h3>
              </div>
              <ul className="fit-list">
                <li>Busques un projecte molt gran de molts mesos</li>
                <li>Necessites molta burocràcia i informes llargs</li>
                <li>Vols &quot;fer IA&quot; per moda, però sense un problema real</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACTE ─── */}
      <section className="section section--contact" id="contact">
        <div className="contact-glow" />
        <div className="container">
          <div className="contact-content scroll-reveal">
            <div className="section-label">Contacte</div>
            <h2 className="contact-title">
              Fem una primera<br /><em className="text-amber">trucada?</em>
            </h2>
            <p className="contact-sub">
              Si tens algun procés que creus que es podria automatitzar, o simplement
              vols explorar què pot fer la IA pel teu negoci, podem fer una trucada
              curta de 20 minuts i veure-ho plegats.
            </p>
            <a href="mailto:brilscreuseudald@gmail.com" className="btn-primary contact-cta">
              Escriu-me ara
              <span className="btn-arrow">→</span>
            </a>
            <p className="contact-note">
              O contacta directament a{" "}
              <a href="mailto:brilscreuseudald@gmail.com" className="link-amber">
                brilscreuseudald@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-logo">TasklessAI</div>
          <div className="footer-links">
            <Link href="/" className="footer-link footer-link--active">Català</Link>
            <span className="footer-sep">·</span>
            <Link href="/es" className="footer-link">Castellano</Link>
          </div>
          <p className="footer-copy">
            © {new Date().getFullYear()} TasklessAI · Lleida
          </p>
        </div>
      </footer>

    </main>
  );
}
