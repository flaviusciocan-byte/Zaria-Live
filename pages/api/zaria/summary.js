export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    summary: {
      status: "online",
      version: "1.0.0",
      components: {
        core: "active",
        agents: "active"
      }
    },
    timestamp: new Date().toISOString()
  });
}
