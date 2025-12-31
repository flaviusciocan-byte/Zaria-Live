export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    runtime: {
      node: process.version,
      platform: process.platform,
      arch: process.arch
    },
    timestamp: new Date().toISOString()
  });
}
