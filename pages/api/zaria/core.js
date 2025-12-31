export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    core: {
      orchestrator: "active",
      api: "active",
      agents: "active"
    },
    timestamp: new Date().toISOString()
  });
}
