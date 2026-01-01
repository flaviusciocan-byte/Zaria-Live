import ZariaNav from "../navigation/ZariaNav";

export default function ZariaLayout({ children }) {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <ZariaNav />
      <main>{children}</main>
    </div>
  );
}
