import Link from "next/link";

export default function ZariaNav() {
  return (
    <nav
      style={{
        marginBottom: "2rem",
        padding: "1rem 0",
        borderBottom: "1px solid #444",
        display: "flex",
        gap: "1.5rem",
        flexWrap: "wrap",
        fontSize: "1.1rem"
      }}
    >
      <Link href="/ui/manifest">
        <span style={{ cursor: "pointer" }}>📜 Manifest</span>
      </Link>

      <Link href="/ui/manifest/layers">
        <span style={{ cursor: "pointer" }}>🔱 Straturi</span>
      </Link>

      <Link href="/ui/manifest/codex">
        <span style={{ cursor: "pointer" }}>📘 Codexuri</span>
      </Link>

      <Link href="/ui/manifest/totality">
        <span style={{ cursor: "pointer" }}>🌕 Totalitate</span>
      </Link>

      <Link href="/api/zaria/health">
        <span style={{ cursor: "pointer" }}>💠 Health</span>
      </Link>

      <Link href="/">
        <span style={{ cursor: "pointer" }}>🏛️ Acasă</span>
      </Link>
    </nav>
  );
}
