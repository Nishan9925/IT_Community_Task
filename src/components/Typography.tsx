import dnldIcon from "../assets/images/download-icon.svg";
import fontIcon from "../assets/images/font-logo.svg";

export default function Typography() {
  return (
    <section className="typography">
      <h2 className="typography-title">Typography</h2>
      <div className="typography-container">
        <div className="typography-container-left">
          <img className="dnldIcon-img" src={dnldIcon} alt="Download Logo" />
          <p className="typography-container-left-title">
            Download the Font family 👉
          </p>
        </div>
        <div className="typography-container-right">
          <img className="fontIcon-img" src={fontIcon} alt="Font Icon" />
          <p className="typography-container-right-title">Roboto Font Family</p>
        </div>
      </div>
    </section>
  );
}
