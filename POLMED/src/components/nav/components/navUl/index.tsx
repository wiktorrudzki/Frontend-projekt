import { useRef, useEffect } from "react";
import NavItem from "../navItems";
import { navItems, NavItemType } from "../navItems/navItems";
import userIcon from "@/img/icons/user-solid.svg";
import Button from "@/components/button";

type Props = {
  path: string;
  type: "desktop" | "mobile";
  showMenu?: boolean;
  setShowMenu?: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavUl = ({ path, type }: Props) => {
  const ulRef = useRef<null | HTMLUListElement>(null);

  useEffect(() => {
    //nie mam pojecia jaki typ pasuje tutaj :|
    function handleClickOutside(e: any) {
      console.log("xd");
      if (
        ulRef.current &&
        !ulRef.current.contains(e.target) &&
        ulRef.current.style.transform === "translateX(-100%)"
      ) {
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
    path === "/"
      ? navItems.map((item: NavItemType) => (
          <NavItem
            type={type}
            key={item.content}
            content={item.content}
            url={item.url}
            homePage={true}
            active={path === item.url}
            icon={item.icon}
          />
        ))
      : navItems.map((item: NavItemType) => (
          <NavItem
            type={type}
            key={item.content}
            content={item.content}
            url={item.url}
            homePage={false}
            active={path === item.url}
            icon={item.icon}
          />
        ));

  return (
    <>
      {type === "mobile" ? (
        <ul ref={ulRef} className="nav-ul">
          <div className="nav-ul-wrapper">
            <div>
              <img src={userIcon} alt="user icon" />
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
          <button className={`nav-btn ${path === "/" && "nav-btn-hp"}`}>Wyloguj</button>
        </ul>
      )}
    </>
  );
};

export default NavUl;
