export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    values: {
      clarity: "Totul începe cu ordine și înțelegere.",
      autonomy: "Fiecare modul operează liber, dar în armonie.",
      discipline: "Fiecare pas este precis, necesar și confirmat.",
      legacy: "Tot ce construim trebuie să dureze și să inspire.",
      expansion: "ZARIA crește modular, natural și universal."
    },
    version: "1.1.0",
    timestamp: new Date().toISOString()
  });
}
