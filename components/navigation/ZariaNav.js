export default function ZariaNav() {
  return (
    <nav
      style={{
        marginBottom: "2rem",
        paddingBottom: "1rem",
        borderBottom: "1px solid #333",
        opacity: 0.85,
        fontSize: "1rem",
        letterSpacing: "0.5px"
      }}
    >
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li style={{ marginBottom: "0.5rem" }}>
          <a href="/" style={{ color: "#f5f5f5", textDecoration: "none" }}>
            🜁 Acasă
          </a>
        </li>

        <li style={{ marginBottom: "0.5rem" }}>
          <a
            href="/ui/manifest"
            style={{ color: "#f5f5f5", textDecoration: "none" }}
          >
            🜂 Manifest ZARIA
          </a>
        </li>

        <li style={{ marginBottom: "0.5rem" }}>
          <a
            href="/ui/manifest/layers"
            style={{ color: "#f5f5f5", textDecoration: "none" }}
          >
            🜄 Straturile Arhitecturii
          </a>
        </li>

        <li>
          <a
            href="/ui/manifest/codex"
            style={{ color: "#f5f5f5", textDecoration: "none" }}
          >
            🜃 Codex ZARIA
          </a>
        </li>
      </ul>
    </nav>
  );
}

