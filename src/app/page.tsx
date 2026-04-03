import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LleidIA Studio | Consultor IA a Lleida",
  description:
    "Consultoria d'IA a Lleida per a freelancers i petites empreses. Automatització de tasques repetitives, resums d'informes i assistents interns.",
};

export default function Home() {
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
          <Link href="/" style={{ color: "#e5e7eb", textDecoration: "underline" }}>
            Català
          </Link>
          <Link
            href="/es"
            style={{ color: "#9ca3af", textDecoration: "underline" }}
          >
            Castellano
          </Link>
        </nav>

        {/* HERO */}
        <section style={styles.section}>
          <h1 style={styles.heroTitle}>
            Automatitzacions amb IA per a petites empreses i professionals de Lleida
          </h1>
          <p style={styles.heroSubtitle}>
            Desenvolupo petites solucions d&apos;IA per estalviar-te hores de feina
            repetitiva: resums d&apos;informes, automatització de processos i
            assistents interns sobre la teva documentació.
          </p>
          <a href="#contact" style={styles.ctaButton}>
            Reserva una trucada gratuïta de 20 minuts
          </a>
          <p style={styles.smallText}>
            Sense compromís, només veiem si et puc ajudar.
          </p>
        </section>

        {/* PER A QUI ÉS */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Per a qui és aquesta consultoria d&apos;IA?</h2>
          <p style={styles.paragraph}>
            A <strong>LleidIA Studio</strong> treballo amb:
          </p>
          <ul style={styles.list}>
            <li>
              Professionals independents i petites empreses de Lleida i Catalunya.
            </li>
            <li>
              Negocis amb processos repetitius (emails, informes, excels, tràmits…)
              que es podrien automatitzar.
            </li>
            <li>
              Equips amb informació escampada en documents, correus o eines com
              Notion o Google Drive.
            </li>
          </ul>
          <p style={styles.paragraph}>
            No cal que siguis &quot;tecnològic&quot;. Tu m&apos;expliques com treballes
            i jo busco on l&apos;IA et pot estalviar temps.
          </p>
        </section>

        {/* PROBLEMES */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Problemes que puc ajudar-te a resoldre</h2>
          <ul style={styles.list}>
            <li>
              <strong>Perds massa temps llegint i preparant informes?</strong> Automatitzo
              resums i extrec les conclusions importants de documents llargs, actes de
              reunió o informes periòdics.
            </li>
            <li>
              <strong>Tens tasques repetitives cada setmana?</strong> Creo petits
              workflows amb IA que llegeixen dades, les processen i actualitzen els teus
              sistemes (fulls de càlcul, CRM, etc.).
            </li>
            <li>
              <strong>Tens la informació dispersa en mil llocs?</strong> Munto un
              assistent intern perquè puguis preguntar sobre la teva pròpia
              documentació (PDFs, Notion, procediments, FAQs…).
            </li>
          </ul>
        </section>

        {/* SERVEIS */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Què puc fer per al teu negoci</h2>

          <div style={styles.cardGrid}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>
                Servei 1 – Automatització de tasques repetitives
              </h3>
              <p style={styles.paragraph}>
                Ideal si cada setmana fas sempre el mateix manualment.
              </p>
              <ul style={styles.list}>
                <li>Analitzem el teu procés actual (emails, excels, eines).</li>
                <li>Dissenyo una petita automatització amb IA i scripts.</li>
                <li>La deixo configurada perquè funcioni sola (o gairebé).</li>
              </ul>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Servei 2 – Resums intel·ligents</h3>
              <p style={styles.paragraph}>
                Ideal si treballes amb documents llargs, informes o actes.
              </p>
              <ul style={styles.list}>
                <li>
                  Configuro un sistema que resumeix documents, informes i reunions.
                </li>
                <li>
                  Et mostra només el més important i les properes accions.
                </li>
                <li>Pots adaptar el to i el format al teu estil de treball.</li>
              </ul>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>
                Servei 3 – Assistent intern sobre la teva documentació
              </h3>
              <p style={styles.paragraph}>
                Ideal si tu o el teu equip esteu cansats de buscar informació a mà.
              </p>
              <ul style={styles.list}>
                <li>Centralitzem la teva documentació (PDFs, Notion, procediments…).</li>
                <li>Cream un assistent amb IA que entén el teu contingut.</li>
                <li>
                  Hi pots fer preguntes en llenguatge natural (català o castellà).
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* COM TREBALLO */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Com treballo amb tu</h2>
          <ol style={styles.orderedList}>
            <li>
              <strong>Trucada introductòria (20 minuts)</strong> – M&apos;expliques què
              fas, com treballes i on perds més temps.
            </li>
            <li>
              <strong>Proposta simple</strong> – Una solució concreta i acotada, amb
              temps estimat i preu tancat.
            </li>
            <li>
              <strong>Implementació</strong> – M&apos;encarrego de la part tècnica:
              integracions, IA, scripts i proves.
            </li>
            <li>
              <strong>Entrega i ajustos</strong> – T&apos;ensenyo com funciona i fem els
              ajustos necessaris.
            </li>
          </ol>
        </section>

        {/* SOBRE MI */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Qui hi ha darrere LleidIA Studio</h2>
          <p style={styles.paragraph}>
            Sóc <strong>Eudald Brils</strong>, consultor {" "}
            <strong>full stack</strong> especialitzat en solucions d&apos;IA. Treballo en
            consultoria tecnològica i, a banda, ajudo petites empreses i professionals a:
          </p>
          <ul style={styles.list}>
            <li>Automatitzar processos repetitius.</li>
            <li>Integrar IA als seus fluxos de treball.</li>
            <li>Guanyar temps sense haver de contractar un gran equip tècnic.</li>
          </ul>
          <p style={styles.paragraph}>
            Si m&apos;expliques el teu dia a dia en llenguatge normal, en tinc prou per
            entendre el teu procés i buscar-hi millores.
          </p>
        </section>

        {/* PER QUI ÉS / NO ÉS */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Aquest servei és per tu si…</h2>
          <div style={styles.cardGrid}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>És per tu si:</h3>
              <ul style={styles.list}>
                <li>Vols estalviar temps en tasques repetitives i avorrides.</li>
                <li>Estàs obert a provar solucions noves amb IA.</li>
                <li>
                  Prefereixes un projecte petit i concret abans que un macroprojecte IT.
                </li>
              </ul>
            </div>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>No és per tu si:</h3>
              <ul style={styles.list}>
                <li>Busques un projecte molt gran de molts mesos.</li>
                <li>Necessites molta burocràcia i informes llargs.</li>
                <li>
                  Només vols &quot;fer IA&quot; per moda, però sense un problema real.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* BLOQUE CASTELLÀ RESUMIT */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>
            També treballo en castellà, per a Lleida i Catalunya
          </h2>
          <p style={styles.paragraph}>
            Si ho prefereixes, podem treballar completament en castellà. La idea és la
            mateixa: petites automatitzacions amb IA per a freelancers i petites empreses
            que volen estalviar temps en tasques repetitives i aprofitar millor la seva
            informació.
          </p>
        </section>

        {/* CONTACTE */}
        <section id="contact" style={styles.section}>
          <h2 style={styles.sectionTitle}>Fem una primera trucada?</h2>
          <p style={styles.paragraph}>
            Si tens algun procés que creus que es podria automatitzar, o simplement
            vols explorar què pot fer l&apos;IA pel teu negoci, podem fer una trucada
            curta i veure-ho.
          </p>
          <p style={styles.paragraph}>
            Pots contactar-me a: {" "}
            <a href="mailto:tuemail@example.com" style={styles.link}>
              tuemail@example.com
            </a>
          </p>
          <p style={styles.smallText}>
            (Quan tinguis Calendly o similar, aquí hi pots afegir l&apos;enllaç.)
          </p>
        </section>

        {/* FOOTER */}
        <footer style={styles.footer}>
          <p style={styles.smallText}>
            © {new Date().getFullYear()} LleidIA Studio · Consultoria d&apos;IA a Lleida
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
