export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    routes: [
      "/api/zaria",
      "/api/zaria/info",
      "/api/zaria/status",
      "/api/zaria/health",
      "/api/zaria/state",
      "/api/zaria/time",
      "/api/zaria/uptime",
      "/api/zaria/map",
      "/api/zaria/version",
      "/api/zaria/system",
      "/api/zaria/agents",
      "/api/zaria/orchestrator"
    ],
    timestamp: new Date().toISOString()
  });
}
