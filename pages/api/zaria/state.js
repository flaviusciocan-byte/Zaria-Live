export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    state: {
      online: true,
      stable: true,
      agents_active: true
    },
    timestamp: new Date().toISOString()
  });
}
