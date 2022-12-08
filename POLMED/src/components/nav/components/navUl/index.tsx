import { useRef, useEffect } from "react";
import NavItem from "../navItems";
import { navItems, NavItemType } from "../navItems/navItems";
import Button from "@/components/button";
import { usePath } from "@/hooks/usePath/usePath";

type Props = {
  type: "desktop" | "mobile";
  showMenu?: boolean;
  setShowMenu?: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavUl = ({ type }: Props) => {
  const currentPath = usePath();
  const ulRef = useRef<null | HTMLUListElement>(null);

  useEffect(() => {
    //nie mam pojecia jaki typ pasuje tutaj :|
    //eslint-disable-next-line
    function handleClickOutside(e: any) {
      if (
        ulRef.current &&
        !ulRef.current.contains(e.target) &&
        ulRef.current.style.transform === "translateX(-100%)"
      ) {
        const divDarker = document.querySelector(".div-darker");
        (divDarker as HTMLElement).style.setProperty("display", "none");
        ulRef.current.style.transform = "translateX(0%)";
      }
    }
    if (window.innerWidth <= 1024) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [window.innerWidth]);

  const checkHomePage = () =>
    currentPath === "/"
      ? navItems.map((item: NavItemType) => (
          <NavItem
            type={type}
            key={item.content}
            content={item.content}
            url={item.url}
            homePage={true}
            active={currentPath === item.url}
            icon={item.icon}
            ulRef={ulRef}
          />
        ))
      : navItems.map((item: NavItemType) => (
          <NavItem
            type={type}
            key={item.content}
            content={item.content}
            url={item.url}
            homePage={false}
            active={currentPath === item.url}
            icon={item.icon}
            ulRef={ulRef}
          />
        ));

  return (
    <>
      {type === "mobile" ? (
        <ul ref={ulRef} className="nav-ul">
          <div className="nav-ul-wrapper">
            <div>
              <i className="na-ul-wrapper-user-icon" />
              <h2>
                Witaj, <span>Jan!</span>
              </h2>
            </div>
            {checkHomePage()}
          </div>
          <Button content="wyloguj się" btnType="btn-tertiary" />
        </ul>
      ) : (
        <ul className="nav-ul">
          {checkHomePage()}
          <button className={`nav-btn ${currentPath === "/" && "nav-btn-hp"}`}>Wyloguj</button>
        </ul>
      )}
    </>
  );
};

export default NavUl;
