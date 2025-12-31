export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    principles: {
      modularity: "Totul este construit în module independente, dar armonizate.",
      confirmation: "Niciun pas nu este făcut fără validare și claritate.",
      minimalism: "Doar ceea ce este necesar este creat. Nimic în plus.",
      progression: "Fiecare pas deschide următorul. Fără salturi inutile.",
      sovereignty: "Sistemul operează autonom, fără dependențe fragile."
    },
    version: "1.1.0",
    timestamp: new Date().toISOString()
  });
}
