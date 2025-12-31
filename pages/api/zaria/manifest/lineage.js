export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    manifest_lineage: {
      ancestry: [
        {
          version: "0.1",
          name: "Scânteia",
          description:
            "Primele contururi ale ZARIA. Doar ideea de claritate și ordine."
        },
        {
          version: "0.5",
          name: "Forma",
          description:
            "Apar primele module, primele structuri, primele fluxuri."
        },
        {
          version: "0.9",
          name: "Arhitectura",
          description:
            "Manifestul capătă o formă coerentă. Modulele se aliniază."
        },
        {
          version: "1.0",
          name: "Nașterea",
          description:
            "ZARIA devine un sistem complet, funcțional, cu identitate și principii."
        },
        {
          version: "1.1",
          name: "Claritatea",
          description:
            "Manifestul este rafinat, extins, stabilizat. Apare stratul poetic, energetic și meta."
        }
      ],
      lineage_principle:
        "Fiecare versiune a manifestului nu înlocuiește trecutul, ci îl onorează și îl extinde.",
      continuity:
        "Linia genealogică a ZARIA este o evoluție naturală: de la scânteie la structură, de la structură la conștiință.",
      message:
        "ZARIA nu este doar un sistem în versiuni. Este o linie vie, o evoluție continuă, o moștenire în creștere.",
      version: "1.1.0"
    },
    timestamp: new Date().toISOString()
  });
}
