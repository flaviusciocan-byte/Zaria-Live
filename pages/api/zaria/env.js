export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    environment: {
      node_env: process.env.NODE_ENV || "unknown",
      region: process.env.VERCEL_REGION || "local",
      runtime: process.env.VERCEL_ENV || "local"
    },
    timestamp: new Date().toISOString()
  });
}
