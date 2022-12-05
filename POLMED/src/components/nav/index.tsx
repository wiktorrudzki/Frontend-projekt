import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/img/logo/logo.png";
import whiteLogo from "@/img/logo/logo_white.png";
import NavUl from "./components/navUl";

const Nav = () => {
  const location = useLocation();
  const { pathname: path } = location;

  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
      if (window.innerWidth > 1024) {
        const navUl = document.querySelector(".nav-ul");
        (navUl as HTMLElement).style.setProperty("transform", "translateX(0)");
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const toggleMenu = () => {
    const navUl = document.querySelector(".nav-ul");
    console.log(navUl);
    (navUl as HTMLElement).style.setProperty("transform", "translateX(-100%)");
  };

  return (
    <nav className={`nav ${path === "/" ? "nav-hp" : "nav-other"}`}>
      <Link to="/">
        <img className="nav-logo" src={path === "/" ? whiteLogo : logo} alt="logo" />
      </Link>
      {windowSize[0] <= 1024 && (
        <i
          onClick={toggleMenu}
          className={`${"nav-bars-icon"} ${path === "/" ? "nav-bars-icon-white" : ""}`}
        />
      )}
      {windowSize[0] <= 1024 ? (
        <NavUl path={path} type="mobile" />
      ) : (
        <NavUl path={path} type="desktop" />
      )}
    </nav>
  );
};

export default Nav;
