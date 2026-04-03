import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LleidIA Studio | Consultor IA en Lleida",
  description:
    "Consultoría de IA en Lleida para freelancers y pequeñas empresas. Automatización de tareas repetitivas, resúmenes de informes y asistentes internos.",
};

export default function HomeEs() {
  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <nav
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "1rem",
            gap: "0.75rem",
            fontSize: "0.9rem",
          }}
        >
          <Link
            href="/"
            style={{ color: "#9ca3af", textDecoration: "underline" }}
          >
            Català
          </Link>
          <Link
            href="/es"
            style={{ color: "#e5e7eb", textDecoration: "underline" }}
          >
            Castellano
          </Link>
        </nav>

        {/* HERO */}
        <section style={styles.section}>
          <h1 style={styles.heroTitle}>
            Automatizaciones con IA para pequeñas empresas y profesionales en Lleida
          </h1>
          <p style={styles.heroSubtitle}>
            Desarrollo pequeñas soluciones de IA para ahorrarte horas de trabajo repetitivo:
            resúmenes de informes, automatización de procesos y asistentes internos
            sobre tu documentación.
          </p>
          <a href="#contact" style={styles.ctaButton}>
            Reserva una llamada gratuita de 20 minutos
          </a>
          <p style={styles.smallText}>
            Sin compromiso, solo vemos si te puedo ayudar.
          </p>
        </section>

        {/* PARA QUIÉN ES */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Para quién es esta consultoría de IA</h2>
          <p style={styles.paragraph}>
            En <strong>LleidIA Studio</strong> trabajo con:
          </p>
          <ul style={styles.list}>
            <li>
              Profesionales independientes y pequeñas empresas de Lleida y Cataluña.
            </li>
            <li>
              Negocios con procesos repetitivos (emails, informes, excels, trámites…)
              que se podrían automatizar.
            </li>
            <li>
              Equipos con información repartida en documentos, correos o herramientas
              como Notion o Google Drive.
            </li>
          </ul>
          <p style={styles.paragraph}>
            No hace falta que seas &quot;tecnológico&quot;. Tú me explicas cómo trabajas
            y yo busco dónde la IA te puede ahorrar tiempo.
          </p>
        </section>

        {/* PROBLEMAS */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Problemas que te puedo ayudar a resolver</h2>
          <ul style={styles.list}>
            <li>
              <strong>¿Pierdes demasiado tiempo leyendo y preparando informes?</strong>{" "}
              Puedo automatizar resúmenes y extraer las conclusiones importantes de
              documentos largos, actas de reuniones o informes periódicos.
            </li>
            <li>
              <strong>¿Haces cada semana las mismas tareas manuales?</strong> Puedo crear
              pequeños workflows con IA que lean datos, los procesen y actualicen tus
              sistemas (hojas de cálculo, CRM, etc.).
            </li>
            <li>
              <strong>¿Tienes la información repartida en mil sitios?</strong> Puedo
              montar un asistente interno para que puedas preguntar sobre tu propia
              documentación (PDFs, Notion, procedimientos, FAQs…).
            </li>
          </ul>
        </section>

        {/* SERVICIOS */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Qué puedo hacer por tu negocio</h2>

          <div style={styles.cardGrid}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>
                Servicio 1 – Automatización de tareas repetitivas
              </h3>
              <p style={styles.paragraph}>
                Ideal si cada semana haces siempre lo mismo manualmente.
              </p>
              <ul style={styles.list}>
                <li>Analizamos tu proceso actual (emails, excels, herramientas).</li>
                <li>Diseño una pequeña automatización con IA y scripts.</li>
                <li>La dejo configurada para que funcione sola (o casi).</li>
              </ul>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>
                Servicio 2 – Resúmenes inteligentes de información
              </h3>
              <p style={styles.paragraph}>
                Ideal si trabajas con documentos largos, informes o actas.
              </p>
              <ul style={styles.list}>
                <li>
                  Configuro un sistema que resume documentos, informes y reuniones.
                </li>
                <li>
                  Te muestra solo lo importante y los próximos pasos.
                </li>
                <li>Puedes adaptar el tono y el formato a tu forma de trabajar.</li>
              </ul>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>
                Servicio 3 – Asistente interno sobre tu documentación
              </h3>
              <p style={styles.paragraph}>
                Ideal si tú o tu equipo estáis cansados de buscar información a mano.
              </p>
              <ul style={styles.list}>
                <li>
                  Centralizamos tu documentación (PDFs, Notion, procedimientos…).
                </li>
                <li>Creo un asistente con IA que entiende tu contenido.</li>
                <li>
                  Puedes hacerle preguntas en lenguaje natural (catalán o castellano).
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CÓMO TRABAJO */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Cómo trabajo contigo</h2>
          <ol style={styles.orderedList}>
            <li>
              <strong>Llamada introductoria (20 minutos)</strong> – Me explicas qué
              haces, cómo trabajas y dónde pierdes más tiempo.
            </li>
            <li>
              <strong>Propuesta simple</strong> – Una solución concreta y acotada, con
              tiempo estimado y precio cerrado.
            </li>
            <li>
              <strong>Implementación</strong> – Me encargo de la parte técnica:
              integraciones, IA, scripts y pruebas.
            </li>
            <li>
              <strong>Entrega y ajustes</strong> – Te enseño cómo funciona y hacemos
              los ajustes necesarios.
            </li>
          </ol>
        </section>

        {/* SOBRE MÍ */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Quién está detrás de LleidIA Studio</h2>
          <p style={styles.paragraph}>
            Soy <strong>Eudald Brils</strong>, consultor <strong>full stack</strong>{" "}
            especializado en soluciones de IA. Trabajo en consultoría tecnológica y,
            además, ayudo a pequeñas empresas y profesionales a:
          </p>
          <ul style={styles.list}>
            <li>Automatizar procesos repetitivos.</li>
            <li>Integrar IA en sus flujos de trabajo.</li>
            <li>Ganar tiempo sin tener que contratar un gran equipo técnico.</li>
          </ul>
          <p style={styles.paragraph}>
            Si me explicas tu día a día en lenguaje normal, tengo suficiente para
            entender tu proceso y buscar mejoras.
          </p>
        </section>

        {/* PARA QUIÉN ES / NO ES */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Este servicio es para ti si…</h2>
          <div style={styles.cardGrid}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Es para ti si:</h3>
              <ul style={styles.list}>
                <li>Quieres ahorrar tiempo en tareas repetitivas y aburridas.</li>
                <li>Estás abierto a probar soluciones nuevas con IA.</li>
                <li>
                  Prefieres un proyecto pequeño y concreto antes que un macroproyecto IT.
                </li>
              </ul>
            </div>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>No es para ti si:</h3>
              <ul style={styles.list}>
                <li>Buscas un proyecto muy grande de muchos meses.</li>
                <li>Necesitas mucha burocracia e informes largos.</li>
                <li>
                  Solo quieres &quot;hacer IA&quot; por moda, pero sin un problema real.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* BLOQUE CATALÁN RESUMIDO */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>
            També podem treballar en català, des de Lleida per a Catalunya
          </h2>
          <p style={styles.paragraph}>
            Si ho prefereixes, també podem treballar completament en català. La idea és
            la mateixa: petites automatitzacions amb IA per a freelancers i petites
            empreses que volen estalviar temps en tasques repetitives i aprofitar millor
            la seva informació.
          </p>
        </section>

        {/* CONTACTO */}
        <section id="contact" style={styles.section}>
          <h2 style={styles.sectionTitle}>¿Hablamos?</h2>
          <p style={styles.paragraph}>
            Si tienes algún proceso que crees que se podría automatizar, o simplemente
            quieres explorar qué puede hacer la IA por tu negocio, podemos hacer una
            llamada corta y verlo.
          </p>
          <p style={styles.paragraph}>
            Puedes contactarme en: {" "}
            <a href="mailto:tuemail@example.com" style={styles.link}>
              tuemail@example.com
            </a>
          </p>
          <p style={styles.smallText}>
            (Cuando tengas Calendly o similar, aquí puedes añadir el enlace.)
          </p>
        </section>

        {/* FOOTER */}
        <footer style={styles.footer}>
          <p style={styles.smallText}>
            © {new Date().getFullYear()} LleidIA Studio · Consultoría de IA en Lleida
          </p>
        </footer>
      </div>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    minHeight: "100vh",
    backgroundColor: "#050816",
    color: "#f9fafb",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
  },
  container: {
    maxWidth: "960px",
    margin: "0 auto",
    padding: "2rem 1.5rem 4rem",
  },
  section: {
    marginBottom: "3rem",
  },
  heroTitle: {
    fontSize: "2.4rem",
    fontWeight: 700,
    marginBottom: "1rem",
    lineHeight: 1.2,
  },
  heroSubtitle: {
    fontSize: "1.05rem",
    color: "#e5e7eb",
    maxWidth: "640px",
    marginBottom: "1.5rem",
  },
  ctaButton: {
    display: "inline-block",
    padding: "0.75rem 1.5rem",
    borderRadius: "9999px",
    background: "linear-gradient(135deg, #22c55e, #14b8a6)",
    color: "#0b1120",
    fontWeight: 600,
    textDecoration: "none",
  },
  smallText: {
    fontSize: "0.85rem",
    color: "#9ca3af",
    marginTop: "0.75rem",
  },
  sectionTitle: {
    fontSize: "1.6rem",
    fontWeight: 600,
    marginBottom: "1rem",
  },
  paragraph: {
    fontSize: "1rem",
    color: "#e5e7eb",
    lineHeight: 1.6,
    marginBottom: "0.75rem",
  },
  list: {
    paddingLeft: "1.25rem",
    marginTop: "0.25rem",
    marginBottom: "0.75rem",
    color: "#e5e7eb",
    lineHeight: 1.6,
  },
  orderedList: {
    paddingLeft: "1.25rem",
    marginTop: "0.25rem",
    marginBottom: "0.75rem",
    color: "#e5e7eb",
    lineHeight: 1.6,
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1.5rem",
    marginTop: "1rem",
  },
  card: {
    borderRadius: "0.75rem",
    border: "1px solid #1f2937",
    padding: "1.25rem",
    background:
      "radial-gradient(circle at top left, rgba(79, 70, 229, 0.15), transparent 55%)",
  },
  cardTitle: {
    fontSize: "1.1rem",
    fontWeight: 600,
    marginBottom: "0.5rem",
  },
  link: {
    color: "#22c55e",
    textDecoration: "underline",
  },
  footer: {
    marginTop: "2rem",
    paddingTop: "1.5rem",
    borderTop: "1px solid #1f2937",
  },
};
