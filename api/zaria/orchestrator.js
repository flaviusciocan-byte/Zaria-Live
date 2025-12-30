export default function handler(req, res) {
  res.status(200).json({
    status: "online",
    message: "ZARIA Orchestrator active"
  });
}

