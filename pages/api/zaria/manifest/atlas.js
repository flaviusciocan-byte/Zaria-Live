export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    manifest_atlas: {
      layers: {
        core: [
          "identity",
          "values",
          "principles",
          "story",
          "oath"
        ],
        structural: [
          "summary",
          "all",
          "routes",
          "map",
          "tree",
          "schema",
          "structure"
        ],
        dynamic: [
          "flow",
          "pulse",
          "heartbeat",
          "field"
        ],
        meta: [
          "deep",
          "insights",
          "echo"
        ],
        evolutionary: [
          "vision",
          "future",
          "expansion",
          "ascension",
          "transcendence"
        ],
        ancestral: [
          "origin",
          "roots",
          "lineage",
          "timeline"
        ]
      },
      relationships: {
        identity: ["values", "story"],
        values: ["principles", "oath"],
        principles: ["structure", "flow"],
        story: ["summary", "deep"],
        oath: ["all", "echo"],
        flow: ["pulse", "heartbeat", "field"],
        deep: ["insights", "transcendence"],
        origin: ["roots", "lineage"],
        lineage: ["timeline", "future"],
        vision: ["future", "expansion", "ascension"]
      },
      atlas_description:
        "Atlasul ZARIA este harta completă a manifestului. Fiecare strat, fiecare modul și fiecare relație este vizibilă într-o singură arhitectură globală.",
      purpose:
        "Să ofere o vedere panoramică asupra întregului sistem, pentru UI, agenți, orchestratori și arhitecți.",
      version: "1.1.0"
    },
    timestamp: new Date().toISOString()
  });
}
