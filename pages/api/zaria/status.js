export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    status: {
      state: "running",
      uptime_seconds: process.uptime()
    },
    timestamp: new Date().toISOString()
  });
}
