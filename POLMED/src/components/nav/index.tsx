import logo from "@/img/logo/logo.png";
import { Link } from "react-router-dom";
import "./style.css";

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <img className="nav-logo" src={logo} alt="logo" />
      </Link>
      <ul className="nav-ul">
        <li>Strona główna</li>
        <li>Nasi lekarze</li>
        <li>Cennik</li>
        <li>Kontakt</li>
        <li>Moje konto</li>
        <button className="nav-btn">Wyloguj</button>
      </ul>
    </nav>
  );
};

export default Nav;
