export default function handler(req, res) {
  res.status(200).json({
    agents: [
      { name: "ZARIA-Agent", status: "online" }
    ]
  });
}
