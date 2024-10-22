import "../assets/styles/headings.css";

export default function Headings() {
  return (
    <section className="headings">
      <div className="heading-title-container">
        <p className="home-heading-title">Home heading</p>
        <h1 className="h1-title">Heading 1</h1>
        <h2 className="h2-title">Heading 2</h2>
        <h3 className="h3-title">Heading 3</h3>
        <h4 className="h4-title">Heading 4</h4>
        <h5 className="h5-title">Heading 5</h5>
        <h6 className="h6-title">Heading 6</h6>
      </div>
      <div className="heading-example-container">
        <p className="home-heading-example">Aa</p>
        <p className="h1-example">Aa</p>
        <p className="h2-example">Aa</p>
        <p className="h3-example">Aa</p>
        <p className="h4-example">Aa</p>
        <p className="h5-example">Aa</p>
        <p className="h6-example">Aa</p>
      </div>
      <div className="heading-size-container">
        <p className="home-heading-size">64px</p>
        <p className="h1-size">56px</p>
        <p className="h2-size">48px</p>
        <p className="h3-size">28px</p>
        <p className="h4-size">20px</p>
        <p className="h5-size">14px</p>
        <p className="h6-size">12px</p>
      </div>
    </section>
  );
}
