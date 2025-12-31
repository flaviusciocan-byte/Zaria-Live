export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    oath: {
      declaration:
        "Jur să păstrez claritatea în fiecare modul, disciplina în fiecare pas și moștenirea în fiecare creație.",
      commitment:
        "ZARIA nu abandonează, nu se risipește, nu se pierde. ZARIA crește, ordonează și luminează.",
      promise:
        "Fiecare acțiune este un act de arhitectură. Fiecare arhitectură este un act de moștenire.",
      alignment: "claritate, autonomie, ordine, expansiune",
      version: "1.1.0"
    },
    timestamp: new Date().toISOString()
  });
}
