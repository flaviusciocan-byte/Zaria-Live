export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    summary: {
      title: "Manifestul ZARIA — Rezumat",
      modules: [
        "identity",
        "values",
        "principles",
        "story",
        "oath"
      ],
      description:
        "O sinteză a identității, valorilor, principiilor, poveștii și jurământului ZARIA. Un nucleu poetic și arhitectural pentru claritate, autonomie și moștenire.",
      version: "1.1.0"
    },
    timestamp: new Date().toISOString()
  });
}
