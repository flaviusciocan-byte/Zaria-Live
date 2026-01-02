export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    modules: [
      "agents",
      "check",
      "config",
      "core",
      "debug",
      "details",
      "health",
      "info",
      "map",
      "orchestrator",
      "ping",
      "state",
      "status",
      "system",
      "time",
      "uptime",
      "version"
    ],
    status: "fully-synchronized",
    timestamp: new Date().toISOString()
  });
}
