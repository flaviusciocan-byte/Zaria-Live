import ZariaLayout from "../../../components/layouts/ZariaLayout";

export default function LayersPage() {
  return (
    <ZariaLayout>
      <h1 style={{ fontSize: "2.4rem", marginBottom: "1rem" }}>
        🌀 Straturile ZARIA
      </h1>

      <p style={{ fontSize: "1.1rem", marginBottom: "2rem", opacity: 0.9 }}>
        Straturile reprezintă arhitectura vie a ZARIA — fiecare nivel adaugă
        profunzime, funcționalitate și coerență întregului sistem.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>
          🌒 Straturile fundamentale
        </h2>

        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li style={{ marginBottom: "1rem" }}>
            <strong>Stratul 1 — Originea</strong> — începutul, esența, nucleul.
          </li>
          <li style={{ marginBottom: "1rem" }}>
            <strong>Stratul 2 — Forma</strong> — structura, ordinea, arhitectura.
          </li>
          <li style={{ marginBottom: "1rem" }}>
            <strong>Stratul 3 — Funcția</strong> — utilitate, mișcare, scop.
          </li>
          <li style={{ marginBottom: "1rem" }}>
            <strong>Stratul 4 — Conexiunea</strong> — integrare, rețea, flux.
          </li>
          <li style={{ marginBottom: "1rem" }}>
            <strong>Stratul 5 — Expansiunea</strong> — creștere, evoluție, scalare.
          </li>
        </ul>
      </section>

      <section>
        <h2 style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>
          🔮 Principiul stratificării
        </h2>

        <p style={{ fontSize: "1.1rem", opacity: 0.9 }}>
          Fiecare strat este complet în sine, dar devine mai puternic atunci când
          este integrat cu celelalte. Arhitectura ZARIA funcționează ca un organism
          viu — fiecare nivel hrănește și susține întregul.
        </p>
      </section>
    </ZariaLayout>
  );
}

