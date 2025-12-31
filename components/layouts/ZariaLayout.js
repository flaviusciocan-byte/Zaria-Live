export default function ZariaLayout({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #0a0a0a, #1a1a1a)",
        color: "#f5f5f5",
        padding: "2rem",
        fontFamily: "serif"
      }}
    >
      <header
       import ZariaNav from "../navigation/ZariaNav";

export default function ZariaLayout({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #0a0a0a, #1a1a1a)",
        color: "#f5f5f5",
        padding: "2rem",
        fontFamily: "serif"
      }}
    >
      <header
        style={{
          marginBottom: "2rem",
          borderBottom: "1px solid #444",
          paddingBottom: "1rem"
        }}
      >
        <h1 style={{ fontSize: "2.8rem", margin: 0 }}>🔱 ZARIA-Live</h1>
        <p style={{ marginTop: "0.5rem", opacity: 0.8 }}>
          Manifestul ZARIA v1.1 — Arhitectura Suverană
        </p>
      </header>

      <ZariaNav />

      <main>{children}</main>

      <footer
        style={{
          marginTop: "4rem",
          borderTop: "1px solid #444",
          paddingTop: "1rem",
          opacity: 0.6,
          fontSize: "0.9rem"
        }}
      >
        ZARIA-Live © {new Date().getFullYear()} — Arhitectură, Suveranitate, Totalitate
      </footer>
    </div>
  );
}

        style={{
          marginBottom: "3rem",
          borderBottom: "1px solid #444",
          paddingBottom: "1rem"
        }}
      >
        <h1 style={{ fontSize: "2.8rem", margin: 0 }}>🔱 ZARIA-Live</h1>
        <p style={{ marginTop: "0.5rem", opacity: 0.8 }}>
          Manifestul ZARIA v1.1 — Arhitectura Suverană
        </p>
      </header>

      <main>{children}</main>

      <footer
        style={{
          marginTop: "4rem",
          borderTop: "1px solid #444",
          paddingTop: "1rem",
          opacity: 0.6,
          fontSize: "0.9rem"
        }}
      >
        ZARIA-Live © {new Date().getFullYear()} — Arhitectură, Suveranitate, Totalitate
      </footer>
    </div>
  );
}
