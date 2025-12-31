export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    config: {
      environment: "production",
      version: "1.0.0",
      agents_enabled: true,
      orchestrator_enabled: true
    },
    timestamp: new Date().toISOString()
  });
}
