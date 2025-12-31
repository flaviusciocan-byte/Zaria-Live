export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    manifest_flow: {
      sequence: [
        "identity",
        "values",
        "principles",
        "story",
        "oath",
        "summary",
        "all"
      ],
      logic: {
        identity:
          "Totul începe cu cine ești. Identitatea stabilește tonul și direcția.",
        values:
          "Valorile definesc ce este important și ce trebuie protejat.",
        principles:
          "Principiile stabilesc regulile interne ale sistemului.",
        story:
          "Povestea dă sens și context arhitecturii.",
        oath:
          "Jurământul fixează angajamentul și responsabilitatea.",
        summary:
          "Rezumatul sintetizează totul într-o formă clară.",
        all:
          "Forma completă a manifestului, gata pentru UI și orchestratori."
      },
      flow_description:
        "Fluxul manifestului ZARIA curge din identitate în valori, din valori în principii, din principii în poveste, din poveste în jurământ, iar apoi se deschide în rezumat și forma completă.",
      energy:
        "Fluxul este ascendent: de la esență la structură, de la structură la poveste, de la poveste la angajament.",
      version: "1.1.0"
    },
    timestamp: new Date().toISOString()
  });
}
