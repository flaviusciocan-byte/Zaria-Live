export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    info: {
      name: "ZARIA",
      version: "1.0.0",
      description: "Modular orchestrator for creators and systems"
    },
    timestamp: new Date().toISOString()
  });
}
