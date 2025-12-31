export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    check: "ok",
    timestamp: new Date().toISOString()
  });
}
