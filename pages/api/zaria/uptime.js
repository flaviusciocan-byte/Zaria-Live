export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    uptime: {
      seconds: process.uptime(),
      environment: process.env.NODE_ENV || "unknown"
    },
    timestamp: new Date().toISOString()
  });
}
