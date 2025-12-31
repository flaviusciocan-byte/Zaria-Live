export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    meta: {
      author: "Flavius Ciocan",
      build: "stable",
      timestamp: new Date().toISOString(),
      description: "Metadate generale pentru sistemul ZARIA-Live."
    }
  });
}
