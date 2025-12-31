export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    manifest_routes: {
      base: "/api/zaria/manifest",
      endpoints: {
        index: "/api/zaria/manifest/index",
        identity: "/api/zaria/manifest/identity",
        values: "/api/zaria/manifest/values",
        principles: "/api/zaria/manifest/principles",
        story: "/api/zaria/manifest/story",
        oath: "/api/zaria/manifest/oath",
        summary: "/api/zaria/manifest/summary",
        all: "/api/zaria/manifest/all"
      }
    },
    version: "1.1.0",
    timestamp: new Date().toISOString()
  });
}
