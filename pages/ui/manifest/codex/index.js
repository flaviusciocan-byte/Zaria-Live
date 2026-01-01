import ZariaLayout from "../../../../components/layouts/ZariaLayout";

const codexuri = [
  { name: "codex_identity", label: "Codex Identitate", version: "1.1.0" },
  { name: "codex_structure", label: "Codex Structură", version: "1.1.0" },
  { name: "codex_rhythm", label: "Codex Ritm", version: "1.1.0" },
  { name: "codex_primordial", label: "Codex Primordial", version: "1.1.0" },
  { name: "codex_ceremonial", label: "Codex Ceremonial", version: "1.1.0" },
  { name: "codex_symbolic", label: "Codex Symbolic", version: "1.1.0" },
  { name: "codex_mechanic", label: "Codex Mecanic", version: "1.1.0" },
  { name: "codex_operational", label: "Codex Operațional", version: "1.1.0" },
  { name: "codex_ethereal", label: "Codex Eteric", version: "1.1.0" },
  { name: "codex_cosmic", label: "Codex Cosmic", version: "1.1.0" },
  { name: "codex_divine", label: "Codex Divin", version: "1.1.0" },
  { name: "codex_infinite", label: "Codex Infinit", version: "1.1.0" },
  { name: "codex_meta", label: "Codex Meta", version: "1.1.0" },
  { name: "codex_omni", label: "Codex Omni", version: "1.1.0" },
  { name: "codex_origin", label: "Codex Origine", version: "1.1.0" },
  { name: "codex_cycle", label: "Codex Ciclu", version: "1.1.0" },
  { name: "codex_synthesis", label: "Codex Sinteză", version: "1.1.0" },
  { name: "codex_totality", label: "Codex Totalitate", version: "1.1.0" }
];

export default function CodexPage() {
  return (
    <ZariaLayout>
      <h1 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>📘 Codexurile Manifestului ZARIA</h1>
      <p style={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
        Fiecare codex este o lege vie — un strat de conștiință, o vibrație, o funcție, o memorie.
      </p>

      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {codexuri.map((codex, index) => (
          <li key={index} style={{ marginBottom: "1.5rem" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.3rem" }}>{codex.label}</h2>
            <p style={{ fontSize: "0.95rem", opacity: 0.85 }}>
              Endpoint: <code>/api/zaria/manifest/{codex.name}</code>
            </p>
            <p style={{ fontSize: "0.9rem", opacity: 0.7 }}>
              Versiune: {codex.version}
            </p>
          </li>
        ))}
      </ul>
    </ZariaLayout>
  );
}
