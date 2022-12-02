import logoWhite from "@/img/logo/logo_white.png";
import { Link } from "react-router-dom";

const HomePageFooter = () => {
  return (
    <footer className="footer">
      <section className="hp-footer-upper">
        <ul className="hp-footer-ul">
          <li className="hp-footer-li">
            <img className="hp-footer-logo" src={logoWhite} alt="logo" />
          </li>
          <li className="hp-footer-li">
            <p>ul. Pawia 5</p>
          </li>
          <li className="hp-footer-li">
            <p>31-153 Kraków</p>
          </li>
        </ul>
        <ul className="hp-footer-ul">
          <li className="hp-footer-li">
            <Link className="hp-footer-link" to="/ourDoctors">
              Nasi lakerze
            </Link>
          </li>
          <li className="hp-footer-li">
            <Link className="hp-footer-link" to="/pricing">
              Cennik
            </Link>
          </li>
          <li className="hp-footer-li">
            <Link className="hp-footer-link" to="/contact">
              Kontakt
            </Link>
          </li>
        </ul>
      </section>
      <p className="footer-copyright">Wszelkie prawa zastrzeżone @ POLmed</p>
    </footer>
  );
};

export default HomePageFooter;
