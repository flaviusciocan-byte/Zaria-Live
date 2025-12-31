export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    manifest_expansion: {
      expansion_axes: {
        operational:
          "Extinderea fluxurilor, a modulelor și a protocoalelor interne.",
        poetic:
          "Adăugarea de noi straturi simbolice, metafore și activări.",
        educational:
          "Crearea de module pentru învățare, ghidare și inițiere.",
        narrative:
          "Extinderea poveștii ZARIA în noi capitole și linii temporale.",
        energetic:
          "Adăugarea de noi câmpuri, ritmuri și straturi subtile.",
        technological:
          "Integrarea cu agenți, API-uri externe și sisteme autonome."
      },
      expansion_modes: [
        "Modular — fiecare extensie este un modul separat.",
        "Ritualic — fiecare extensie este activată printr-un pas clar.",
        "Autonom — extensiile pot fi generate de agenți.",
        "Scalabil — extensiile pot fi propagate global."
      ],
      expansion_philosophy:
        "ZARIA se extinde doar atunci când există claritate, necesitate și aliniere. Nimic nu este adăugat fără sens.",
      version: "1.1.0"
    },
    timestamp: new Date().toISOString()
  });
}
