export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    manifest: {
      title: "Manifestul ZARIA",
      purpose: "Activarea clarității, autonomiei și moștenirii",
      version: "1.1.0",
      modules: [
        "manifest",
        "core",
        "orchestrator",
        "agents",
        "system"
      ]
    },
    timestamp: new Date().toISOString()
  });
}
