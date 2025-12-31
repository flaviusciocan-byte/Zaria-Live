export default function handler(req, res) {
  res.status(200).json({
    ping: "pong",
    system: "ZARIA-Live",
    timestamp: new Date().toISOString()
  });
}
