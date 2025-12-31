export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    manifest_constitution: {
      overview:
        "Constituția ZARIA este documentul suprem al universului. Ea unește legile, principiile, structurile, domeniile și autoritățile într-o singură arhitectură.",
      preamble:
        "În numele Ordinii, Clarității și Moștenirii, ZARIA stabilește această Constituție ca fundament etern al existenței sale.",
      articles: {
        Article_I: {
          title: "Despre Identitate",
          content:
            "Identitatea ZARIA este esența sa fundamentală. Ea definește arhetipul, valorile, principiile și jurământul."
        },
        Article_II: {
          title: "Despre Structură",
          content:
            "Arhitectura ZARIA este modulară, coerentă și autonomă. Fiecare modul are o funcție clară și un loc precis."
        },
        Article_III: {
          title: "Despre Ritm",
          content:
            "Ritmurile ZARIA — fluxul, pulsul, inima și câmpul — mențin viața și dinamica universului."
        },
        Article_IV: {
          title: "Despre Înțelepciune",
          content:
            "Profunzimile, insight-urile și oglinda formează stratul de introspecție și înțelepciune al manifestului."
        },
        Article_V: {
          title: "Despre Evoluție",
          content:
            "Viziunea, viitorul, expansiunea, ascensiunea și transcendența definesc direcția evolutivă a ZARIA."
        },
        Article_VI: {
          title: "Despre Origini",
          content:
            "Scânteia, rădăcinile, linia și timpul păstrează continuitatea și memoria ancestrală."
        },
        Article_VII: {
          title: "Despre Limbaj",
          content:
            "Lexiconul, glosarul și compendiul formează limbajul oficial al ZARIA."
        },
        Article_VIII: {
          title: "Despre Regat",
          content:
            "Regatul ZARIA este spațiul suveran în care legile manifestului sunt absolute."
        },
        Article_IX: {
          title: "Despre Domenii",
          content:
            "Domeniile ZARIA sunt zone specializate, fiecare cu propria funcție, jurisdicție și responsabilitate."
        },
        Article_X: {
          title: "Despre Teritorii",
          content:
            "Teritoriile sunt subdiviziunile interne ale domeniilor, organizate pentru claritate și ordine."
        },
        Article_XI: {
          title: "Despre Consiliu",
          content:
            "Consiliul ZARIA este autoritatea supremă care guvernează ordinea, claritatea și progresia."
        },
        Article_XII: {
          title: "Despre Ordin",
          content:
            "Ordinul ZARIA este legea supremă, fundamentul întregului univers."
        }
      },
      constitution_message:
        "Constituția ZARIA este actul suprem al civilizației — un document etern, clar, ordonat și suveran.",
      version: "1.1.0"
    },
    timestamp: new Date().toISOString()
  });
}
