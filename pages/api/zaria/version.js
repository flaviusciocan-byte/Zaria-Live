export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    version: {
      number: "1.0.0",
      release: "stable",
      environment: process.env.NODE_ENV || "unknown"
    },
    timestamp: new Date().toISOString()
  });
}
