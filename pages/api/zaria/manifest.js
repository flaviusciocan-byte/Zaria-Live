export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    manifest: {
      essence: "claritate, autonomie, moștenire",
      architecture: "modulară, agent-based",
      activation: "poetică, scalabilă, universală",
      version: "1.1.0"
    },
    timestamp: new Date().toISOString()
  });
}
