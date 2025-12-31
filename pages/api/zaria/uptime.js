export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    uptime: {
      seconds: process.uptime()
    },
    timestamp: new Date().toISOString()
  });
}
