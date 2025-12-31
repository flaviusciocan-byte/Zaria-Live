export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    orchestrator: {
      status: "active",
      role: "central-coordinator",
      version: "1.0.0",
      uptime_seconds: process.uptime()
    },
    timestamp: new Date().toISOString()
  });
}
