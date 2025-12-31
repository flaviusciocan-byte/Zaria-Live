export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    manifest_meta: {
      name: "Manifestul ZARIA",
      version: "1.1.0",
      author: "Arhitectul Sistemului",
      structure: [
        "identity",
        "values",
        "principles",
        "story",
        "oath",
        "summary",
        "all",
        "routes",
        "health"
      ],
      description:
        "Metadate oficiale pentru Manifestul ZARIA. Include versiunea, autorul, structura și timestamp-ul.",
    },
    timestamp: new Date().toISOString()
  });
}
