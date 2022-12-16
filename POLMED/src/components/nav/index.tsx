import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/img/logo/logo.png";
import whiteLogo from "@/img/logo/logo_white.png";
import NavUl from "./components/navUl";
import { usePath } from "@/hooks/usePath/usePath";

const Nav = () => {
  const currentPath = usePath();
  useEffect(() => {
    (document.querySelector(".doctors-page") as HTMLElement)?.classList.remove("inactive-slide");
  }, [currentPath]);

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
    const divDarker = document.querySelector(".div-darker");
    (divDarker as HTMLElement).style.setProperty("display", "initial");
    (navUl as HTMLElement).style.setProperty("transform", "translateX(-100%)");
  };

  return (
    <nav className={`nav ${currentPath === "/" ? "nav-hp" : "nav-other"}`}>
      <div className="div-darker"></div>
      <Link to="/">
        <img className="nav-logo" src={currentPath === "/" ? whiteLogo : logo} alt="logo" />
      </Link>
      {windowSize[0] <= 1024 && (
        <i
          onClick={toggleMenu}
          className={`${"nav-bars-icon"} ${currentPath === "/" ? "nav-bars-icon-white" : ""}`}
        />
      )}
      {windowSize[0] <= 1024 ? <NavUl type="mobile" /> : <NavUl type="desktop" />}
    </nav>
  );
};

export default Nav;
