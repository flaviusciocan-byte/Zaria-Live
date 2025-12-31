export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    config: {
      environment: process.env.NODE_ENV || "unknown",
      version: "1.0.0",
      debug: process.env.DEBUG_MODE || false
    },
    timestamp: new Date().toISOString()
  });
}
