import "../assets/styles/palette.css";
export default function Palette() {
  const colors = [
    "#70C174",
    "#BEF3C0",
    "#EFF7F2",
    "#0B0706",
    "#0B0706",
    "#525560",
    "#EBF0F9",
    "#EBF0F9",
  ];

  return (
    <section className="palette">
      <h2 className="palette-title">Color Palette</h2>
      <div className="palettes-container">
        {colors.map((color, index) => (
          <div
            key={index}
            className="palette-item"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </section>
  );
}
