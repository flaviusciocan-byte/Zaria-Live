export default function handler(req, res) {
  res.status(200).json({
    orchestrator: "ZARIA-Orchestrator",
    status: "online",
    version: "1.0.0"
  });
}
