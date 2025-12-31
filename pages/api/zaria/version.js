export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    version: {
      number: "1.0.0",
      codename: "AURORA",
      stable: true
    },
    timestamp: new Date().toISOString()
  });
}
