export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    identity: {
      name: "ZARIA",
      type: "orchestrator",
      mode: "autonom",
      version: "1.0.0"
    },
    status: "online",
    timestamp: new Date().toISOString()
  });
}
