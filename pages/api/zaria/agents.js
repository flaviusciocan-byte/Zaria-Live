export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    agents: [
      { name: "Orchestrator", status: "active" },
      { name: "Guardian", status: "active" },
      { name: "Messenger", status: "active" },
      { name: "Scribe", status: "active" }
    ],
    timestamp: new Date().toISOString()
  });
}
