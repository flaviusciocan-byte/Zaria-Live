export default function handler(req, res) {
  const pulse = {
    beat: Math.floor(Math.random() * 40) + 60, // între 60 și 100
    rhythm: "constant",
    energy: "stable",
    coherence: "aligned",
    message: "Manifestul ZARIA pulsează în armonie cu arhitectura sa internă."
  };

  res.status(200).json({
    system: "ZARIA-Live",
    manifest_pulse: pulse,
    version: "1.1.0",
    timestamp: new Date().toISOString()
  });
}
