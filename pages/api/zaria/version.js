export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    version: {
      current: "1.0.0",
      release: "stable"
    },
    timestamp: new Date().toISOString()
  });
}
