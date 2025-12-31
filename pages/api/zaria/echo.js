export default function handler(req, res) {
  res.status(200).json({
    method: req.method,
    query: req.query,
    body: req.body || null,
    headers: req.headers
  });
}
