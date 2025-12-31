export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    status: {
      online: true,
      healthy: true,
      agents: "active",
      orchestrator: "active",
      uptime_seconds: process.uptime()
    },
    timestamp: new Date().toISOString()
  });
}
