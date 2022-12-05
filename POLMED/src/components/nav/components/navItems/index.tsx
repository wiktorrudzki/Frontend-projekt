import { Link } from "react-router-dom";

type Props = {
  content: string;
  url: string;
  active: boolean;
  homePage: boolean;
  type: "mobile" | "desktop";
  icon: string;
  ulRef: React.MutableRefObject<HTMLUListElement | null>;
};

const NavItem = ({ content, url, active, homePage, type, icon, ulRef }: Props) => {
  console.log(icon);

  return (
    <>
      {type === "mobile" ? (
        <Link
          onClick={() => {
            if (ulRef.current) {
              ulRef.current.style.transform = "translateX(0%)";
            }
          }}
          to={url}
          className={`nav-item-link ${active ? "nav-item-link-active" : ""}`}>
          {/* TODO CHANGE ICONS COLOR DEPENDING ON CURRENT ROUTE (AT FIRST WE HAVE TO SOLVE THE TASK WITH SVG ICONS FILL) */}
          {/* <img className="nav-item-icon" src={icon} alt="icon" /> */}
          <i className={`${icon} ${active ? "nav-item-icon-active" : ""}`}></i>
          <li className={`nav-item-li ${active ? "nav-item-li-active" : ""}`}>
            {content}
          </li>
        </Link>
      ) : homePage ? (
        <li className={`nav-item nav-item-hp ${active ? "nav-item-hp-active" : ""}`}>
          <Link
            className={`nav-item-link nav-item-link-hp ${active ? "nav-item-link-hp-active" : ""}`}
            to={url}>
            {content}
          </Link>
        </li>
      ) : (
        <li className={`nav-item ${active ? "nav-item-active" : ""}`}>
          <Link className={`nav-item-link ${active ? "nav-item-link-active" : ""}`} to={url}>
            {content}
          </Link>
        </li>
      )}
    </>
  );
};

export default NavItem;
