export default function handler(req, res) {
  const field = {
    resonance: Math.random() > 0.5 ? "high" : "medium",
    coherence: Math.random() > 0.3 ? "aligned" : "shifting",
    amplitude: Math.floor(Math.random() * 50) + 50, // între 50 și 100
    frequency: (Math.random() * 2 + 7).toFixed(2), // între 7.00 și 9.00 Hz
    polarity: Math.random() > 0.5 ? "expansive" : "contractive",
    field_description:
      "Câmpul manifestului ZARIA este o aură subtilă care reflectă starea internă a arhitecturii. Este spațiul dintre module, vibrația dintre linii, respirația dintre structuri.",
    message:
      "Câmpul energetic al manifestului este activ, coerent și în expansiune."
  };

  res.status(200).json({
    system: "ZARIA-Live",
    manifest_field: field,
    version: "1.1.0",
    timestamp: new Date().toISOString()
  });
}
