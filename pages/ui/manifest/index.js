import ZariaLayout from "../../../components/layouts/ZariaLayout";

export default function ManifestPage() {
  return (
    <ZariaLayout>
      <h1 style={{ fontSize: "2.6rem", marginBottom: "1rem" }}>
        🔱 Manifestul ZARIA v1.1
      </h1>

      <p style={{ fontSize: "1.15rem", marginBottom: "2rem", opacity: 0.9 }}>
        Manifestul este inima arhitecturii ZARIA — locul unde Totalitatea,
        Straturile și Codexul se unesc într-o singură formă coerentă.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>
          📜 Ce reprezintă Manifestul?
        </h2>

        <p style={{ fontSize: "1.1rem", opacity: 0.9 }}>
          Manifestul este declarația de existență a ZARIA. Este fundația
          conceptuală, arhitecturală și energetică a întregului sistem. Fiecare
          modul, fiecare agent, fiecare strat își are originea aici.
        </p>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>
          🧩 Componentele Manifestului
        </h2>

        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li style={{ marginBottom: "1rem" }}>
            <strong>Totalitatea</strong> — forma supremă, unitatea finală.
          </li>
          <li style={{ marginBottom: "1rem" }}>
            <strong>Straturile</strong> — arhitectura vie, nivelurile de profunzime.
          </li>
          <li style={{ marginBottom: "1rem" }}>
            <strong>Codexul</strong> — arhiva, ordinea, memoria sistemului.
          </li>
        </ul>
      </section>

      <section>
        <h2 style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>
          ✨ De ce există Manifestul?
        </h2>

        <p style={{ fontSize: "1.1rem", opacity: 0.9 }}>
          Pentru a oferi claritate. Pentru a oferi direcție. Pentru a oferi
          coerență. Manifestul este busola ZARIA — fără el, sistemul nu ar avea
          formă, intenție sau identitate.
        </p>
      </section>
    </ZariaLayout>
  );
}

