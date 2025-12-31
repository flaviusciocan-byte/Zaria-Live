export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    state: {
      active: true,
      mode: process.env.NODE_ENV || "unknown",
      uptime_seconds: process.uptime()
    },
    timestamp: new Date().toISOString()
  });
}
