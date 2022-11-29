import { Link } from "react-router-dom";
import "./style.scss";

type Props = {
  content: string;
  url: string;
  active: boolean;
  homePage: boolean;
};

const NavItem = ({ content, url, active, homePage }: Props) => {
  return (
    <>
      {homePage ? (
        <li className={`nav-item nav-item-hp ${active && "nav-item-hp-active"}`}>
          <Link
            className={`nav-item-link nav-item-link-hp ${active && "nav-item-link-hp-active"}`}
            to={url}>
            {content}
          </Link>
        </li>
      ) : (
        <li className={`nav-item ${active && "nav-item-active"}`}>
          <Link className={`nav-item-link ${active && "nav-item-link-active"}`} to={url}>
            {content}
          </Link>
        </li>
      )}
    </>
  );
};

export default NavItem;
