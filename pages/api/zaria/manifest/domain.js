export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    manifest_domain: {
      overview:
        "Domeniile ZARIA sunt zonele specializate ale arhitecturii, fiecare cu propria funcție, jurisdicție și responsabilitate.",
      domains: {
        identity_domain: {
          purpose: "Protejează și definește esența ZARIA.",
          includes: ["identity", "values", "principles", "oath"]
        },
        architecture_domain: {
          purpose: "Administrează structura, hărțile și rutele.",
          includes: ["summary", "routes", "map", "tree", "schema", "structure"]
        },
        rhythm_domain: {
          purpose: "Gestionează ritmurile și energiile manifestului.",
          includes: ["flow", "pulse", "heartbeat", "field"]
        },
        introspection_domain: {
          purpose: "Guvernează profunzimea, reflecția și înțelepciunea.",
          includes: ["deep", "insights", "echo"]
        },
        evolution_domain: {
          purpose: "Administrează viitorul, expansiunea și ascensiunea.",
          includes: ["vision", "future", "expansion", "ascension", "transcendence"]
        },
        ancestry_domain: {
          purpose: "Păstrează originile, rădăcinile și continuitatea.",
          includes: ["origin", "roots", "lineage", "timeline"]
        },
        language_domain: {
          purpose: "Gestionează limbajul, definițiile și enciclopediile.",
          includes: ["lexicon", "glossary", "compendium"]
        }
      },
      domain_laws: {
        specialization:
          "Fiecare domeniu are o funcție clară și nu interferează cu celelalte.",
        cooperation:
          "Domeniile colaborează prin fluxuri ordonate și coerente.",
        sovereignty:
          "Fiecare domeniu este suveran în responsabilitatea lui.",
        clarity:
          "Nicio funcție nu este ambiguă. Totul este definit."
      },
      domain_message:
        "Domeniile ZARIA transformă arhitectura într-o civilizație ordonată, unde fiecare parte își cunoaște rolul.",
      version: "1.1.0"
    },
    timestamp: new Date().toISOString()
  });
}
