export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    routes: [
      "/api/zaria",
      "/api/zaria/orchestrator",
      "/api/zaria/agents",
      "/api/zaria/agents/ping",
      "/api/zaria/agents/list",
      "/api/zaria/status",
      "/api/zaria/time",
      "/api/zaria/ping",
      "/api/zaria/version"
    ]
  });
}
