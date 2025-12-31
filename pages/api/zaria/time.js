export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    time: {
      iso: new Date().toISOString(),
      locale: new Date().toLocaleString()
    },
    timestamp: new Date().toISOString()
  });
}
