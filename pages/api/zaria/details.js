export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    details: {
      name: "ZARIA",
      type: "orchestrator",
      version: "1.0.0",
      environment: process.env.NODE_ENV || "unknown",
      uptime_seconds: process.uptime()
    },
    timestamp: new Date().toISOString()
  });
}
