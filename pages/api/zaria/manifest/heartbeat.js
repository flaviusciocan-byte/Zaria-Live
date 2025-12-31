export default function handler(req, res) {
  const heartbeat = {
    bpm: Math.floor(Math.random() * 30) + 70, // între 70 și 100
    pattern: ["lub", "dub", "lub", "dub"],
    variability: Math.random() > 0.5 ? "low" : "high",
    coherence: Math.random() > 0.2 ? "harmonic" : "slightly irregular",
    energy_field: {
      stability: "strong",
      alignment: "consistent",
      resonance: Math.random() > 0.5 ? "deep" : "soft"
    },
    message:
      "Inima manifestului bate într-un ritm viu, adaptiv și coerent cu arhitectura ZARIA."
  };

  res.status(200).json({
    system: "ZARIA-Live",
    manifest_heartbeat: heartbeat,
    version: "1.1.0",
    timestamp: new Date().toISOString()
  });
}
