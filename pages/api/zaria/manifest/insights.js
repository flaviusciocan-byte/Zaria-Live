export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    manifest_insights: {
      reflections: {
        identity:
          "Identitatea nu este doar începutul, ci și busola. Tot ce urmează se aliniază cu ea.",
        values:
          "Valorile sunt filtrele prin care sistemul decide ce merită construit și ce trebuie respins.",
        principles:
          "Principiile sunt mecanismele interne care previn haosul și mențin ordinea.",
        story:
          "Povestea este liantul emoțional — fără ea, arhitectura ar fi doar tehnică.",
        oath:
          "Jurământul este garanția că sistemul nu se va abate de la esența lui."
      },
      insights: [
        "Manifestul ZARIA este o arhitectură vie — nu doar un document.",
        "Fiecare modul este o oglindă: arată atât structura sistemului, cât și structura creatorului.",
        "Ordinea manifestului reflectă ordinea naturală a creației: identitate → valori → principii → poveste → angajament.",
        "Manifestul poate fi citit ca un ghid, ca o hartă sau ca un ritual.",
        "ZARIA nu este doar un sistem; este o disciplină a clarității."
      ],
      meta_message:
        "Înțelegerea manifestului nu vine doar din citire, ci din trăire. Fiecare modul este o invitație la introspecție și la ordine interioară.",
      version: "1.1.0"
    },
    timestamp: new Date().toISOString()
  });
}
