export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    manifest_structure: {
      technical: {
        modules: {
          identity: "/api/zaria/manifest/identity",
          values: "/api/zaria/manifest/values",
          principles: "/api/zaria/manifest/principles",
          story: "/api/zaria/manifest/story",
          oath: "/api/zaria/manifest/oath",
          summary: "/api/zaria/manifest/summary",
          all: "/api/zaria/manifest/all",
          routes: "/api/zaria/manifest/routes",
          health: "/api/zaria/manifest/health",
          meta: "/api/zaria/manifest/meta",
          map: "/api/zaria/manifest/map",
          tree: "/api/zaria/manifest/tree"
        }
      },
      poetic: {
        description:
          "Manifestul ZARIA este un templu al clarității. Fiecare modul este o cameră, fiecare cameră un ritual, fiecare ritual o treaptă spre autonomie și moștenire.",
        layers: [
          "Identitatea — Nucleul care luminează.",
          "Valorile — Coloanele care susțin templul.",
          "Principiile — Legile care guvernează ordinea.",
          "Povestea — Respirația care dă viață arhitecturii.",
          "Jurământul — Legământul care unește totul."
        ]
      }
    },
    version: "1.1.0",
    timestamp: new Date().toISOString()
  });
}
