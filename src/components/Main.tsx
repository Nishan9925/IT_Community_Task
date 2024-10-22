import Typography from "./Typography";
import "../assets/styles/main.css";
import Headings from "./Headings";
import Paragraph from "./Paragraph";
import Palette from "./Palette";
import Buttons from "./Buttons";

export default function Main() {
  return (
    <main className="main">
      <Typography />
      <Headings />
      <Paragraph />
      <Palette />
      <Buttons />
    </main>
  );
}
