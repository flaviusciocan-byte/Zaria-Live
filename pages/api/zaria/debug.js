export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    debug: {
      method: req.method,
      query: req.query,
      headers: req.headers
    },
    timestamp: new Date().toISOString()
  });
}
