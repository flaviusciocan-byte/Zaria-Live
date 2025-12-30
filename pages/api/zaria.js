export default function handler(req, res) {
  res.status(200).json({
    zaria: "online",
    orchestrator: "/api/zaria/orchestrator"
  });
}
