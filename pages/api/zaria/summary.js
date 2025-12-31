export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    summary: {
      status: "online",
      healthy: true,
      version: "1.0.0",
      agents: "active",
      orchestrator: "active",
      uptime_seconds: process.uptime()
    },
    timestamp: new Date().toISOString()
  });
}
