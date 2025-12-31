export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    core: {
      essence: "modularity",
      orchestration: "agent-based",
      philosophy: "clarity, autonomy, legacy",
      uptime_seconds: process.uptime()
    },
    timestamp: new Date().toISOString()
  });
}

