export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    info: {
      name: "ZARIA-Live",
      version: "1.0.0",
      status: "online",
      description: "Sistem modular de orchestrare inteligentă."
    },
    timestamp: new Date().toISOString()
  });
}
