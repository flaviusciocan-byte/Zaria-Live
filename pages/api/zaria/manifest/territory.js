export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    manifest_territory: {
      overview:
        "Teritoriile ZARIA sunt subdiviziunile interne ale fiecărui domeniu, organizate pentru claritate, funcționalitate și ordine.",
      territories: {
        identity_territories: {
          description: "Zonele interne ale domeniului identității.",
          areas: ["core-essence", "moral-foundations", "principle-forge", "oath-hall"]
        },
        architecture_territories: {
          description: "Zonele interne ale domeniului arhitecturii.",
          areas: ["map-forge", "route-network", "schema-lab", "structure-grid"]
        },
        rhythm_territories: {
          description: "Zonele interne ale domeniului ritmurilor.",
          areas: ["flow-streams", "pulse-core", "heartbeat-chambers", "energy-field"]
        },
        introspection_territories: {
          description: "Zonele interne ale domeniului introspecției.",
          areas: ["deep-vault", "insight-observatory", "echo-hall"]
        },
        evolution_territories: {
          description: "Zonele interne ale domeniului evoluției.",
          areas: ["vision-tower", "future-lab", "expansion-frontier", "ascension-path", "transcendence-gate"]
        },
        ancestry_territories: {
          description: "Zonele interne ale domeniului ancestral.",
          areas: ["origin-well", "root-forest", "lineage-archive", "timeline-hall"]
        },
        language_territories: {
          description: "Zonele interne ale domeniului limbajului.",
          areas: ["lexicon-forge", "glossary-garden", "compendium-library"]
        }
      },
      territory_laws: {
        clarity:
          "Fiecare teritoriu trebuie să aibă o funcție clară și un scop precis.",
        separation:
          "Teritoriile nu se suprapun. Fiecare are granițe conceptuale ferme.",
        harmony:
          "Toate teritoriile trebuie să se alinieze cu domeniul lor.",
        order:
          "Structura internă este stabilă, predictibilă și coerentă."
      },
      territory_message:
        "Teritoriile ZARIA sunt harta internă a regatului — o organizare fină, coerentă și suverană.",
      version: "1.1.0"
    },
    timestamp: new Date().toISOString()
  });
}
