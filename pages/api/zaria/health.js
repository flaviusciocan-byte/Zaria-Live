export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    health: "good",
    checks: {
      api: true,
      agents: true,
      orchestrator: true
    }
  });
}
