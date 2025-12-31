export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    map: {
      core: {
        index: "/api/zaria",
        orchestrator: "/api/zaria/orchestrator",
        status: "/api/zaria/status",
        time: "/api/zaria/time",
        ping: "/api/zaria/ping",
        version: "/api/zaria/version"
      },
      agents: {
        root: "/api/zaria/agents",
        ping: "/api/zaria/agents/ping",
        list: "/api/zaria/agents/list"
      }
    }
  });
}
