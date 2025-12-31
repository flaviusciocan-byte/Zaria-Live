export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    server: {
      uptime_seconds: process.uptime(),
      node_version: process.version,
      platform: process.platform
    },
    timestamp: new Date().toISOString()
  });
}
