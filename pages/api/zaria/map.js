export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    map: {
      core: ["orchestrator", "agents", "system"],
      diagnostics: ["status", "health", "uptime", "check", "debug"],
      metadata: ["info", "version", "details"],
      utilities: ["time", "state", "ping"]
    },
    timestamp: new Date().toISOString()
  });
}
