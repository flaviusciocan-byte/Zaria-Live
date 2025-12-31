export default function handler(req, res) {
  res.status(200).json({
    system: "ZARIA-Live",
    story: {
      origin: "ZARIA s-a născut din nevoia de ordine într-o lume digitală haotică.",
      spark: "Un arhitect a decis că fiecare sistem trebuie să aibă claritate, autonomie și moștenire.",
      evolution: "Dintr-un nucleu simplu, ZARIA a crescut modular, agent cu agent, ritual cu ritual.",
      purpose: "Să transforme complexitatea în simplitate și simplitatea în putere.",
      direction: "ZARIA nu este doar un sistem. Este o arhitectură vie."
    },
    version: "1.1.0",
    timestamp: new Date().toISOString()
  });
}
