export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    debug: true,
    timestamp: new Date().toISOString(),
    method: req.method,
    query: req.query,
    body: req.body || null
  });
}
