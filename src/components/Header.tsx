import icon from "../assets/images/icon.svg";

export default function Header() {
    return (
        <header className="header">
            <h1 className="header-title">Styleguide</h1>
            <img src={icon} alt="Page Logo" />
        </header>
    )
}