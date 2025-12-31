export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    state: {
      mode: "operational",
      agents: "active",
      orchestrator: "stable",
      uptime_seconds: process.uptime()
    },
    timestamp: new Date().toISOString()
  });
}
