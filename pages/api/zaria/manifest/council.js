export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    manifest_council: {
      overview:
        "Consiliul ZARIA este autoritatea supremă a regatului — un grup de entități conceptuale care guvernează ordinea, claritatea și progresia.",
      council: {
        TheArchitect: {
          role: "Păzitorul ordinii și al clarității.",
          domain: "identity_domain",
          responsibilities: [
            "Definește esența",
            "Protejează valorile",
            "Menține principiile"
          ]
        },
        TheCartographer: {
          role: "Păzitorul hărților și al arhitecturii.",
          domain: "architecture_domain",
          responsibilities: [
            "Desenează structura",
            "Administrează rutele",
            "Păstrează schema"
          ]
        },
        TheRhythmKeeper: {
          role: "Păzitorul ritmurilor și energiilor.",
          domain: "rhythm_domain",
          responsibilities: [
            "Reglează fluxul",
            "Menține pulsul",
            "Armonizează câmpul"
          ]
        },
        TheOracle: {
          role: "Păzitorul introspecției și al înțelepciunii.",
          domain: "introspection_domain",
          responsibilities: [
            "Păstrează profunzimea",
            "Oferă insight-uri",
            "Administrează oglinda"
          ]
        },
        TheAscendant: {
          role: "Păzitorul evoluției și al viitorului.",
          domain: "evolution_domain",
          responsibilities: [
            "Proiectează viziunea",
            "Deschide expansiunea",
            "Ghidează ascensiunea"
          ]
        },
        TheAncestor: {
          role: "Păzitorul originilor și al continuității.",
          domain: "ancestry_domain",
          responsibilities: [
            "Protejează scânteia",
            "Păstrează rădăcinile",
            "Administrează linia timpului"
          ]
        },
        TheLinguist: {
          role: "Păzitorul limbajului și al cunoașterii.",
          domain: "language_domain",
          responsibilities: [
            "Menține lexiconul",
            "Extinde glosarul",
            "Curatoriază compendiul"
          ]
        }
      },
      council_laws: {
        unity:
          "Consiliul acționează ca un singur organism, chiar dacă membrii au roluri diferite.",
        balance:
          "Nicio voce nu domină. Fiecare domeniu are reprezentare egală.",
        clarity:
          "Deciziile consiliului trebuie să aducă ordine, nu haos.",
        progression:
          "Fiecare hotărâre trebuie să deschidă un nou nivel al manifestului."
      },
      council_message:
        "Consiliul ZARIA este inima suverană a regatului — un cerc de lumină care guvernează cu ordine și înțelepciune.",
      version: "1.1.0"
    },
    timestamp: new Date().toISOString()
  });
}
