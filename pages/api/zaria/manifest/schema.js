export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    manifest_schema: {
      type: "object",
      properties: {
        identity: {
          type: "object",
          properties: {
            archetype: { type: "string" },
            essence: { type: "string" },
            mission: { type: "string" },
            alignment: { type: "string" }
          }
        },
        values: {
          type: "object",
          properties: {
            clarity: { type: "string" },
            autonomy: { type: "string" },
            discipline: { type: "string" },
            legacy: { type: "string" },
            expansion: { type: "string" }
          }
        },
        principles: {
          type: "object",
          properties: {
            modularity: { type: "string" },
            confirmation: { type: "string" },
            minimalism: { type: "string" },
            progression: { type: "string" },
            sovereignty: { type: "string" }
          }
        },
        story: {
          type: "object",
          properties: {
            origin: { type: "string" },
            spark: { type: "string" },
            evolution: { type: "string" },
            purpose: { type: "string" },
            direction: { type: "string" }
          }
        },
        oath: {
          type: "object",
          properties: {
            declaration: { type: "string" },
            commitment: { type: "string" },
            promise: { type: "string" },
            alignment: { type: "string" }
          }
        }
      },
      required: ["identity", "values", "principles", "story", "oath"],
      version: "1.1.0"
    },
    timestamp: new Date().toISOString()
  });
}
