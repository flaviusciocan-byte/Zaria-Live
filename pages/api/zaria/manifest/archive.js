export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    manifest_archive: {
      overview:
        "Arhiva ZARIA conține toate versiunile, reviziile și transformările manifestului, păstrate pentru continuitate și studiu.",
      versions: [
        {
          version: "0.1",
          codename: "Spark",
          changes: [
            "Prima idee de claritate",
            "Primele contururi ale arhitecturii"
          ],
          notes: "Totul era doar lumină și intenție."
        },
        {
          version: "0.5",
          codename: "Form",
          changes: [
            "Apar primele module",
            "Structura începe să prindă formă"
          ],
          notes: "Arhitectura devine vizibilă."
        },
        {
          version: "0.9",
          codename: "Architecture",
          changes: [
            "Structură coerentă",
            "Fluxuri ordonate",
            "Module aliniate"
          ],
          notes: "ZARIA devine sistem."
        },
        {
          version: "1.0",
          codename: "Birth",
          changes: [
            "Identitate completă",
            "Valori, principii, poveste",
            "Arhitectură stabilă"
          ],
          notes: "ZARIA se naște ca sistem complet."
        },
        {
          version: "1.1",
          codename: "Clarity",
          changes: [
            "Straturi poetice",
            "Straturi energetice",
            "Straturi meta",
            "Extinderea arhitecturii"
          ],
          notes: "ZARIA devine civilizație arhitecturală."
        }
      ],
      revision_policy:
        "Fiecare versiune este păstrată integral. Nimic nu se pierde. Totul contribuie la moștenire.",
      archive_message:
        "Arhiva ZARIA este memoria sistemului — un spațiu sacru al continuității și evoluției.",
      version: "1.1.0"
    },
    timestamp: new Date().toISOString()
  });
}
