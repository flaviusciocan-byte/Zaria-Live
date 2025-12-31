export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    ping: "pong",
    timestamp: new Date().toISOString()
  });
}
