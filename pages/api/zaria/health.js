export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    health: {
      status: "healthy",
      uptime_seconds: process.uptime(),
      environment: process.env.NODE_ENV || "unknown"
    },
    timestamp: new Date().toISOString()
  });
}
