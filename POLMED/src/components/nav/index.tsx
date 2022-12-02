import { Link, useLocation } from "react-router-dom";
import NavItem from "./navItems";
import { navItems, NavItemType } from "./navItems/navItems";
import logo from "@/img/logo/logo.png";
import whiteLogo from "@/img/logo/logo_white.png";

const Nav = () => {
  const location = useLocation();
  const { pathname: path } = location;

  return (
    <nav className={`${path === "/" ? "nav-hp" : "nav"}`}>
      <Link to="/">
        <img className="nav-logo" src={path === "/" ? whiteLogo : logo} alt="logo" />
      </Link>
      <ul className="nav-ul">
        {path === "/"
          ? navItems.map((item: NavItemType) => (
              <NavItem
                key={item.content}
                content={item.content}
                url={item.url}
                homePage={true}
                active={path === item.url}
              />
            ))
          : navItems.map((item: NavItemType) => (
              <NavItem
                key={item.content}
                content={item.content}
                url={item.url}
                homePage={false}
                active={path === item.url}
              />
            ))}
        <button className={`nav-btn ${path === "/" && "nav-btn-hp"}`}>Wyloguj</button>
      </ul>
    </nav>
  );
};

export default Nav;
