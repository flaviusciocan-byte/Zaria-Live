export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    map: {
      core: "active",
      orchestrator: "active",
      agents: "active",
      endpoints: "stable"
    },
    timestamp: new Date().toISOString()
  });
}
