import logoWhite from "@/img/logo/logo_white.png";
import { Link } from "react-router-dom";
import "./style.css";

const HomePageFooter = () => {
  return (
    <footer className="home-page-footer">
      <section className="home-page-footer-upper">
        <ul className="home-page-footer-ul">
          <li className="home-page-footer-li">
            <img className="home-page-footer-logo" src={logoWhite} alt="logo" />
          </li>
          <li className="home-page-footer-li">
            <p>ul. Pawia 5</p>
          </li>
          <li className="home-page-footer-li">
            <p>31-153 Kraków</p>
          </li>
        </ul>
        <ul className="home-page-footer-ul">
          <li className="home-page-footer-li">
            <Link className="home-page-footer-link" to="/ourDoctors">
              Nasi lakerze
            </Link>
          </li>
          <li className="home-page-footer-li">
            <Link className="home-page-footer-link" to="/pricing">
              Cennik
            </Link>
          </li>
          <li className="home-page-footer-li">
            <Link className="home-page-footer-link" to="/contact">
              Kontakt
            </Link>
          </li>
        </ul>
      </section>
      <p className="home-page-footer-lower">Wszelkie prawa zastrzeżone @ POLmed</p>
    </footer>
  );
};

export default HomePageFooter;
