export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    manifest_lexicon: {
      terms: {
        identity:
          "Esența și arhetipul sistemului. Cine este ZARIA.",
        values:
          "Pilonii morali și operaționali ai arhitecturii.",
        principles:
          "Legile interne care guvernează funcționarea sistemului.",
        story:
          "Narațiunea care dă sens și direcție manifestului.",
        oath:
          "Angajamentul etern al arhitectului și al sistemului.",
        module:
          "O unitate autonomă, clar definită, care îndeplinește o funcție.",
        flow:
          "Mișcarea naturală dintre module. Progresia ordonată.",
        pulse:
          "Ritmul de bază al manifestului. Starea lui vitală.",
        heartbeat:
          "Ritmul avansat, cu variații și pattern-uri.",
        field:
          "Câmpul energetic subtil al manifestului.",
        deep:
          "Stratul de introspecție și înțelepciune.",
        insights:
          "Reflecții și interpretări avansate ale manifestului.",
        echo:
          "Oglinda manifestului. Returnează secțiuni la cerere.",
        vision:
          "Direcția pe termen lung a manifestului.",
        future:
          "Proiecția evoluției în versiunile următoare.",
        expansion:
          "Modul în care manifestul se extinde în noi teritorii.",
        ascension:
          "Urcarea manifestului în straturi superioare.",
        transcendence:
          "Depășirea formei. Manifestul devine prezență.",
        origin:
          "Scânteia primordială care a dat naștere ZARIA.",
        roots:
          "Rădăcinile fundamentale ale arhitecturii.",
        lineage:
          "Linia genealogică a manifestului.",
        timeline:
          "Cronologia completă a evoluției ZARIA.",
        atlas:
          "Harta totală a manifestului.",
        codex:
          "Cartea totală. Sinteza supremă a manifestului."
      },
      lexicon_message:
        "Lexiconul ZARIA definește limbajul arhitecturii. Fiecare termen este o cheie, fiecare cheie deschide un strat.",
      version: "1.1.0"
    },
    timestamp: new Date().toISOString()
  });
}
