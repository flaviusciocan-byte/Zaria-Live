export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    details: {
      name: "ZARIA-Live",
      description: "Sistem modular de orchestrare inteligentă.",
      version: "1.0.0",
      author: "Flavius Ciocan",
      components: {
        api: "active",
        orchestrator: "active",
        agents: "active"
      }
    },
    timestamp: new Date().toISOString()
  });
}
