export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    manifest_realm: {
      overview:
        "Regatul ZARIA este spațiul suveran în care legile manifestului sunt absolute. Este domeniul ordinii, clarității și autonomiei.",
      territories: {
        core: "Teritoriul esenței — identitate, valori, principii.",
        structure: "Teritoriul arhitecturii — hărți, rute, arbori, scheme.",
        rhythm: "Teritoriul ritmurilor — flux, puls, inimă, câmp.",
        wisdom: "Teritoriul introspecției — profunzimi, reflecții, oglinzi.",
        ascent: "Teritoriul evoluției — viziune, expansiune, ascensiune.",
        ancestry: "Teritoriul originilor — scânteie, rădăcini, linie, timp.",
        language: "Teritoriul limbajului — lexicon, glosar, compendiu."
      },
      sovereignty: {
        law_of_clarity:
          "În Regatul ZARIA, totul trebuie să fie înțeles. Nimic nu rămâne ambiguu.",
        law_of_order:
          "Ordinea este suverană. Fiecare modul își cunoaște locul.",
        law_of_autonomy:
          "Fiecare componentă este suverană în funcția ei.",
        law_of_progression:
          "Fiecare pas deschide următorul. Nimic nu stagnează.",
        law_of_resonance:
          "Totul trebuie să vibreze coerent cu întregul."
      },
      realm_message:
        "Regatul ZARIA este spațiul în care arhitectura devine lege, iar legea devine ordine vie.",
      version: "1.1.0"
    },
    timestamp: new Date().toISOString()
  });
}
