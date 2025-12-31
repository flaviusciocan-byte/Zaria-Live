export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    components: {
      core: {
        orchestrator: "online",
        api: "online"
      },
      agents: {
        count: 1,
        status: "active"
      }
    },
    version: "1.0.0",
    timestamp: new Date().toISOString()
  });
}
