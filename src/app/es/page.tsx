import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TasklessAI | Consultoría IA en Lleida",
  description:
    "Consultoría de IA en Lleida para freelancers y pequeñas empresas. Automatización de tareas repetitivas, resúmenes de informes y asistentes internos.",
};

const problems = [
  {
    icon: "⏳",
    title: "Pierdes horas leyendo informes",
    desc: "Documentos largos, actas de reunión, informes periódicos... toda la semana consumiendo tiempo que podrías dedicar a lo que de verdad importa.",
  },
  {
    icon: "🔁",
    title: "Las mismas tareas cada semana",
    desc: "Copias datos de un sitio a otro, actualizas hojas de cálculo, envías emails iguales... una y otra vez, sin que nadie lo resuelva.",
  },
  {
    icon: "🗂️",
    title: "La información, repartida por todas partes",
    desc: "PDFs, Notion, Google Drive, correos... encontrar un dato sencillo se convierte en una expedición de diez minutos.",
  },
];

const services = [
  {
    num: "01",
    icon: "⚡",
    title: "Automatización de tareas",
    tagline: "Ideal si repites las mismas acciones cada semana",
    bullets: [
      "Analizamos tu proceso actual",
      "Diseño la automatización a medida con IA",
      "Funciona sola, sin que tengas que tocar nada",
    ],
  },
  {
    num: "02",
    icon: "📋",
    title: "Resúmenes inteligentes",
    tagline: "Ideal si trabajas con documentos largos o informes",
    bullets: [
      "Sistema que resume documentos y reuniones",
      "Muestra lo que importa y los próximos pasos",
      "Adaptado a tu tono y formato de trabajo",
    ],
  },
  {
    num: "03",
    icon: "💬",
    title: "Asistente interno documental",
    tagline: "Ideal si estáis cansados de buscar información a mano",
    bullets: [
      "Centralizamos toda tu documentación",
      "Asistente con IA que entiende tu contenido",
      "Preguntas en castellano o catalán",
    ],
  },
];

const steps = [
  {
    num: "01",
    title: "Llamada introductoria",
    desc: "20 min para entender cómo trabajas y dónde pierdes tiempo",
  },
  {
    num: "02",
    title: "Propuesta simple",
    desc: "Solución concreta, tiempo estimado y precio cerrado",
  },
  {
    num: "03",
    title: "Implementación",
    desc: "Me encargo de la parte técnica completamente",
  },
  {
    num: "04",
    title: "Entrega y ajustes",
    desc: "Te enseño cómo funciona y afinamos los detalles juntos",
  },
];

export default function HomeEs() {
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
            <Link href="/" className="nav-link">Català</Link>
            <Link href="/es" className="nav-link nav-link--active">Castellano</Link>
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
            Automatizaciones<br />
            con <em className="text-amber">IA</em> para<br />
            tu negocio
          </h1>
          <p className="hero-sub fade-up-3">
            Desarrollo soluciones de IA a medida para ahorrarte horas de trabajo
            repetitivo: resúmenes de informes, automatizaciones de procesos y
            asistentes internos sobre tu documentación.
          </p>
          <div className="hero-actions fade-up-4">
            <a href="#contact" className="btn-primary">
              Reserva 20 min gratuitos
              <span className="btn-arrow">→</span>
            </a>
            <span className="hero-note">Sin compromiso, solo vemos si te puedo ayudar.</span>
          </div>
          <div className="hero-stats fade-up-5">
            <div className="hero-stat">
              <span className="hero-stat-num">3</span>
              <span className="hero-stat-label">Servicios claros</span>
            </div>
            <div className="hero-stat-div" />
            <div className="hero-stat">
              <span className="hero-stat-num">20&apos;</span>
              <span className="hero-stat-label">Primera llamada</span>
            </div>
            <div className="hero-stat-div" />
            <div className="hero-stat">
              <span className="hero-stat-num">0€</span>
              <span className="hero-stat-label">Sin compromiso</span>
            </div>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <div className="scroll-indicator" />
        </div>
      </section>

      {/* ─── PROBLEMAS ─── */}
      <section className="section section--dark" id="problemas">
        <div className="container">
          <div className="section-intro scroll-reveal">
            <div className="section-label">Para quién es</div>
            <h2 className="section-title">
              ¿Reconoces alguna<br />de estas situaciones?
            </h2>
            <div className="section-divider" />
            <p className="section-sub">
              Trabajo con profesionales independientes y pequeñas empresas de Lleida y
              Cataluña que quieren sacar partido a la IA sin necesitar un gran equipo
              técnico.
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
            No hace falta que seas &quot;tecnológico&quot;. Tú me explicas cómo trabajas y yo
            busco dónde la IA te puede ahorrar tiempo.
          </p>
        </div>
      </section>

      {/* ─── SERVICIOS ─── */}
      <section className="section" id="servicios">
        <div className="container">
          <div className="section-intro scroll-reveal">
            <div className="section-label">Servicios</div>
            <h2 className="section-title">Qué puedo hacer por tu negocio</h2>
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

      {/* ─── PROCESO ─── */}
      <section className="section section--alt" id="proceso">
        <div className="container">
          <div className="section-intro scroll-reveal">
            <div className="section-label">Cómo trabajo</div>
            <h2 className="section-title">Sencillo para ti, potente en el resultado</h2>
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

      {/* ─── SOBRE MÍ ─── */}
      <section className="section" id="sobre">
        <div className="container">
          <div className="about-layout scroll-reveal">
            <div className="about-text">
              <div className="section-label">Quién soy</div>
              <h2 className="section-title">
                Soy <em className="text-amber">Eudald Brils</em>,<br />
                consultor IA full stack
              </h2>
              <div className="section-divider" />
              <p className="body-text">
                Trabajo en consultoría tecnológica y, además, ayudo a pequeñas empresas y
                profesionales a automatizar procesos repetitivos, integrar IA en sus flujos
                de trabajo y ganar tiempo sin tener que contratar un gran equipo técnico.
              </p>
              <p className="body-text" style={{ marginTop: "1.25rem" }}>
                Si me explicas tu día a día en lenguaje normal, tengo suficiente para
                entender tu proceso y buscar mejoras concretas.
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
                  <span className="tag">Automatización</span>
                  <span className="tag">RAG / LLMs</span>
                  <span className="tag">Lleida · Cataluña</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ADECUACIÓN ─── */}
      <section className="section section--dark" id="adecuacion">
        <div className="container">
          <div className="section-intro scroll-reveal">
            <div className="section-label">Adecuación</div>
            <h2 className="section-title">Este servicio es para ti si…</h2>
            <div className="section-divider" />
          </div>
          <div className="fit-grid">
            <div className="fit-card fit-card--yes scroll-reveal">
              <div className="fit-header">
                <span className="fit-icon">✓</span>
                <h3 className="fit-title">Es para ti si</h3>
              </div>
              <ul className="fit-list">
                <li>Quieres ahorrar tiempo en tareas repetitivas y aburridas</li>
                <li>Estás abierto a probar soluciones nuevas con IA</li>
                <li>Prefieres un proyecto pequeño y concreto a un macroproyecto IT</li>
              </ul>
            </div>
            <div className="fit-card fit-card--no scroll-reveal">
              <div className="fit-header">
                <span className="fit-icon fit-icon--no">✕</span>
                <h3 className="fit-title">No es para ti si</h3>
              </div>
              <ul className="fit-list">
                <li>Buscas un proyecto muy grande de muchos meses</li>
                <li>Necesitas mucha burocracia e informes largos</li>
                <li>Solo quieres &quot;hacer IA&quot; por moda, sin un problema real</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACTO ─── */}
      <section className="section section--contact" id="contact">
        <div className="contact-glow" />
        <div className="container">
          <div className="contact-content scroll-reveal">
            <div className="section-label">Contacto</div>
            <h2 className="contact-title">
              ¿Hacemos una primera<br /><em className="text-amber">llamada?</em>
            </h2>
            <p className="contact-sub">
              Si tienes algún proceso que crees que se podría automatizar, o simplemente
              quieres explorar qué puede hacer la IA por tu negocio, podemos hacer una
              llamada corta de 20 minutos y verlo juntos.
            </p>
            <a href="mailto:brilscreuseudald@gmail.com" className="btn-primary contact-cta">
              Escríbeme ahora
              <span className="btn-arrow">→</span>
            </a>
            <p className="contact-note">
              O contáctame directamente en{" "}
              <a href="mailto:brilscreuseudald@gmail.com" className="link-amber">
                tuemail@example.com
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
            <Link href="/" className="footer-link">Català</Link>
            <span className="footer-sep">·</span>
            <Link href="/es" className="footer-link footer-link--active">Castellano</Link>
          </div>
          <p className="footer-copy">
            © {new Date().getFullYear()} TasklessAI · Lleida
          </p>
        </div>
      </footer>

    </main>
  );
}
