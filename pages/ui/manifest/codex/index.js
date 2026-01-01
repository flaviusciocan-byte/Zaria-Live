import ZariaLayout from "../../../components/layouts/ZariaLayout";

export default function CodexPage() {
  return (
    <ZariaLayout>
      <h1 style={{ fontSize: "2.4rem", marginBottom: "1rem" }}>
        📘 Codexul ZARIA
      </h1>

      <p style={{ fontSize: "1.1rem", marginBottom: "2rem", opacity: 0.9 }}>
        Codexul este arhiva vie a ZARIA — locul unde principiile, straturile și
        totalitatea se unesc într-o singură formă coerentă.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>
          🔷 Structura Codexului
        </h2>

        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li style={{ marginBottom: "1rem" }}>
            <strong>Volumul I — Originea</strong> — începutul, intenția, nucleul.
          </li>
          <li style={{ marginBottom: "1rem" }}>
            <strong>Volumul II — Arhitectura</strong> — ordinea, forma, structura.
          </li>
          <li style={{ marginBottom: "1rem" }}>
            <strong>Volumul III — Funcția</strong> — utilitatea, mișcarea, scopul.
          </li>
          <li style={{ marginBottom: "1rem" }}>
            <strong>Volumul IV — Conexiunea</strong> — integrarea, rețeaua, fluxul.
          </li>
          <li style={{ marginBottom: "1rem" }}>
            <strong>Volumul V — Totalitatea</strong> — unitatea supremă, forma finală.
          </li>
        </ul>
      </section>

      <section>
        <h2 style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>
          ✨ Rolul Codexului
        </h2>

        <p style={{ fontSize: "1.1rem", opacity: 0.9 }}>
          Codexul nu este doar o colecție de texte — este o hartă vie a
          arhitecturii ZARIA. Fiecare volum este o treaptă, fiecare treaptă este
          o revelație, iar fiecare revelație te apropie de Totalitate.
        </p>
      </section>
    </ZariaLayout>
  );
}
