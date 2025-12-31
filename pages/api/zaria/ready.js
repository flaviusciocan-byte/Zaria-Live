export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    ready: true,
    timestamp: new Date().toISOString()
  });
}
