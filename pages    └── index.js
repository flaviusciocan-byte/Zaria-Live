export default function Home() {
  const modules = [
    "agents",
    "check",
    "config",
    "core",
    "debug",
    "details",
    "health",
    "info",
    "map",
    "orchestrator",
    "ping",
    "state",
    "status",
    "system",
    "time",
    "uptime",
    "version"
  ];

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>ZARIA-Live</h1>
      <p>Sistem modular activat. Endpointuri disponibile:</p>
      <ul>
        {modules.map((mod) => (
          <li key={mod}>
            <code>/api/zaria/{mod}</code>
          </li>
        ))}
      </ul>
      <p style={{ marginTop: "2rem", fontStyle: "italic" }}>
        Orchestratorul este activ. Claritate, autonomie, moștenire.
      </p>
    </main>
  );
}
