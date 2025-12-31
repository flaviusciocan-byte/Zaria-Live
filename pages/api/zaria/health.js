export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    health: {
      status: "healthy",
      uptime_seconds: process.uptime(),
      agents: "active",
      orchestrator: "active"
    },
    timestamp: new Date().toISOString()
  });
}
