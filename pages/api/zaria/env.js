export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    environment: {
      node_env: process.env.NODE_ENV || "unknown",
      vercel_env: process.env.VERCEL_ENV || "unknown"
    },
    timestamp: new Date().toISOString()
  });
}
