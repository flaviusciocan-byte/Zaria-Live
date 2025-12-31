export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    version: "1.0.0"
  });
}
