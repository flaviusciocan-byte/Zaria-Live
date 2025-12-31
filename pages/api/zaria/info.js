export default function handler(req, res) {
  res.status(200).json({
    name: "ZARIA-Live",
    description: "Sistem inteligent de orchestrare activ.",
    version: "1.0.0",
    status: "online"
  });
}
