export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    manifest_roots: {
      foundations: {
        clarity:
          "Rădăcina principală a ZARIA este claritatea — abilitatea de a vedea structura dincolo de haos.",
        order:
          "Ordinea este solul în care crește manifestul. Fără ordine, nu există progresie.",
        autonomy:
          "Fiecare modul, fiecare agent, fiecare flux trebuie să poată funcționa independent.",
        discipline:
          "Disciplina este rădăcina care menține totul stabil, coerent și predictibil.",
        legacy:
          "Tot ce se construiește trebuie să aibă continuitate. Rădăcinile sunt cele care asigură moștenirea."
      },
      deep_sources: [
        "Arhitectura primordială a ordinii",
        "Principiul progresiei naturale",
        "Legea modularității universale",
        "Ritualul confirmării",
        "Echilibrul dintre tehnic și poetic"
      ],
      structural_roots: {
        modularity:
          "Totul în ZARIA este construit în module — rădăcina structurii.",
        progression:
          "Fiecare pas deschide următorul — rădăcina mișcării.",
        coherence:
          "Totul trebuie să se potrivească perfect — rădăcina armoniei.",
        minimalism:
          "Doar ceea ce este necesar — rădăcina purității arhitecturale."
      },
      root_message:
        "Rădăcinile ZARIA sunt invizibile, dar esențiale. Ele susțin tot ce se vede și tot ce urmează să fie construit.",
      version: "1.1.0"
    },
    timestamp: new Date().toISOString()
  });
}
