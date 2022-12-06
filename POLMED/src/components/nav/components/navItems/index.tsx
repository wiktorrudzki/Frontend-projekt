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
  return (
    <>
      {type === "mobile" ? (
        <Link
          onClick={() => {
            if (ulRef.current) {
              ulRef.current.style.transform = "translateX(0%)";
              const divDarker = document.querySelector(".div-darker");
              (divDarker as HTMLElement).style.setProperty("display", "none");
            }
          }}
          to={url}
          className={`nav-item-link ${active ? "nav-item-link-active" : ""}`}>
          <i className={`${icon} ${active ? "nav-item-icon-active" : ""}`}></i>
          <li className={`nav-item-li ${active ? "nav-item-li-active" : ""}`}>{content}</li>
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
