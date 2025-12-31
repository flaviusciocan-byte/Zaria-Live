export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    overview: {
      status: "operational",
      version: "1.0.0",
      uptime_seconds: process.uptime(),
      environment: process.env.NODE_ENV || "unknown"
    },
    timestamp: new Date().toISOString()
  });
}
