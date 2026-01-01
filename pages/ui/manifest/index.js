import ZariaLayout from "../../../../components/layouts/ZariaLayout";


export default function ManifestHome() {
  const [manifest, setManifest] = useState(null);

  useEffect(() => {
    fetch("/api/zaria/manifest/master")
      .then((res) => res.json())
      .then((data) => setManifest(data.manifest_master));
  }, []);

  if (!manifest) {
    return <div style={{ padding: "2rem" }}>Se încarcă Manifestul ZARIA...</div>;
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "serif" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        🔱 Manifestul ZARIA v{manifest.version}
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        {manifest.message}
      </p>

      <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>📜 Straturi:</h2>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {Object.entries(manifest.layers).map(([key, layer]) => (
          <li key={key} style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>
              {layer.label}
            </h3>
            <p style={{ fontSize: "1rem", marginBottom: "0.3rem" }}>
              {layer.description}
            </p>
            <ul style={{ paddingLeft: "1rem", fontSize: "0.9rem" }}>
              {layer.example_endpoints.map((endpoint, i) => (
                <li key={i} style={{ fontFamily: "monospace" }}>{endpoint}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <h2 style={{ fontSize: "1.8rem", marginTop: "3rem" }}>🧭 Următorii pași:</h2>
      <ul style={{ fontSize: "1rem" }}>
        {Object.entries(manifest.next_steps).map(([key, step]) => (
          <li key={key} style={{ marginBottom: "0.5rem" }}>🔹 {step}</li>
        ))}
      </ul>
    </div>
  );
}
