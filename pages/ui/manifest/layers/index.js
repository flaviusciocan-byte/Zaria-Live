import ZariaLayout from "../../../components/layouts/ZariaLayout";
const layers = [
  {
    name: "Stratul Arhitectural",
    description: "Identitate, structură, ritm, înțelepciune, evoluție, origini, limbaj."
  },
  {
    name: "Stratul Suveran",
    description: "Regatul ZARIA, domeniile și teritoriile suverane."
  },
  {
    name: "Stratul Guvernamental",
    description: "Consiliul ZARIA, Ordinul ZARIA, Constituția ZARIA."
  },
  {
    name: "Stratul Mitologic",
    description: "Codexurile Primordial, Ceremonial și Symbolic."
  },
  {
    name: "Stratul Mecanic & Operațional",
    description: "Mecanismele interne și regulile de operare ale ZARIA."
  },
  {
    name: "Stratul Energetic",
    description: "Codexurile Eteric și Cosmic — câmpuri, vibrații, dimensiuni universale."
  },
  {
    name: "Stratul Transcendent",
    description: "Codexurile Divin și Infinit — principii sacre și adevăruri meta-divine."
  },
  {
    name: "Stratul Meta & Omni",
    description: "Reflexia, auto-conștiența și omniprezența ZARIA."
  },
  {
    name: "Stratul Originar Ciclic",
    description: "Originea Absolută și Ciclul Etern al ZARIA."
  },
  {
    name: "Stratul Sintezei & Totalității",
    description: "Sinteza finală și forma totală a ZARIA."
  }
];

export default function LayersPage() {
  return (
    <ZariaLayout>
      <h1 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>📜 Straturile Manifestului ZARIA</h1>
      <p style={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
        Fiecare strat reprezintă o dimensiune a arhitecturii ZARIA — de la identitate la totalitate.
      </p>

      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {layers.map((layer, index) => (
          <li key={index} style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{layer.name}</h2>
            <p style={{ fontSize: "1rem", opacity: 0.9 }}>{layer.description}</p>
          </li>
        ))}
      </ul>
    </ZariaLayout>
  );
}
