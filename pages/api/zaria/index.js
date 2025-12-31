export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    endpoints: {
      orchestrator: "/api/zaria/orchestrator",
      agents: "/api/zaria/agents",
      status: "/api/zaria/status",
      time: "/api/zaria/time",
      ping: "/api/zaria/ping",
      version: "/api/zaria/version"
    }
  });
}
