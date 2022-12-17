import { useRef, useEffect } from "react";
import NavItem from "../navItems";
import { navItems, NavItemType } from "../navItems/navItems";
import Button from "@/components/button";
import { usePath } from "@/hooks/usePath/usePath";
import { useLogin } from "@/hooks/useLogin/useLogin";
import { useNavigate } from "react-router-dom";

type Props = {
  type: "desktop" | "mobile";
  showMenu?: boolean;
  setShowMenu?: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavUl = ({ type }: Props) => {
  const currentPath = usePath();
  const { isLoggedIn, setIsLoggedIn } = useLogin();
  const navigate = useNavigate();
  const ulRef = useRef<null | HTMLUListElement>(null);

  useEffect(() => {
    //nie mam pojecia jaki typ pasuje tutaj :|
    //eslint-disable-next-line
    const handleClickOutside = (e: any) => {
      if (
        ulRef.current &&
        !ulRef.current.contains(e.target) &&
        ulRef.current.style.transform === "translateX(-100%)"
      ) {
        const divDarker = document.querySelector(".div-darker");
        (divDarker as HTMLElement).style.setProperty("display", "none");
        ulRef.current.style.transform = "translateX(0%)";
      }
    };

    if (window.innerWidth <= 1024) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [window.innerWidth]);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    if (currentPath === "/myAccount") {
      navigate("/");
    }
    setIsLoggedIn(false);
  };

  const checkHomePage = () =>
    currentPath === "/"
      ? navItems.map((item: NavItemType) => {
          if (!isLoggedIn && item.content === "Moje konto") {
            return;
          }
          return (
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
          );
        })
      : navItems.map((item: NavItemType) => {
          if (!isLoggedIn && item.content === "Moje konto") {
            return;
          }
          return (
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
          );
        });

  return (
    <>
      {type === "mobile" ? (
        <ul ref={ulRef} className="nav-ul">
          <div className="nav-ul-wrapper">
            {isLoggedIn && (
              <div>
                <i className="na-ul-wrapper-user-icon" />
                <h2>
                  Witaj, <span>Jan!</span>
                </h2>
              </div>
            )}
            {checkHomePage()}
          </div>
          {isLoggedIn ? (
            <Button onClick={logout} content="wyloguj się" btnType="btn-tertiary" />
          ) : (
            <Button content="zaloguj się" btnType="btn-tertiary" onClick={login} />
          )}
        </ul>
      ) : (
        <ul className="nav-ul">
          {checkHomePage()}
          {isLoggedIn ? (
            <button onClick={logout} className={`nav-btn ${currentPath === "/" && "nav-btn-hp"}`}>
              Wyloguj
            </button>
          ) : (
            <button onClick={login} className={`nav-btn ${currentPath === "/" && "nav-btn-hp"}`}>
              Zaloguj
            </button>
          )}
        </ul>
      )}
    </>
  );
};

export default NavUl;
