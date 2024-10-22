import "../assets/styles/paragraph.css";
export default function Paragraph() {
  return (
    <section className="paragraph">
      <div className="paragraph-normal">
        <h3 className="paragraph-title">Paragraph</h3>
        <p className="paragraph-content">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Ut nec turpis tristique, egestas lacus at,
          cursus arcu
        </p>
      </div>
      <div className="paragraph-small">
        <h3 className="paragraph-small-title">Paragraph (small)</h3>
        <p className="paragraph-small-content">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Ut nec turpis tristique, egestas lacus at,
          cursus arcu
        </p>
      </div>
    </section>
  );
}
