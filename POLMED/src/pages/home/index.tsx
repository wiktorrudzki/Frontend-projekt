import HomePageFooter from "@/components/footers/home-page";
import { useRef } from "react";
import "./styles/style.scss";
import "./styles/home-up.scss";
import "./styles/home-down.scss";

const Home = () => {
  const hpDownRef = useRef<null | HTMLDivElement>(null);
  const hpRef = useRef<null | HTMLDivElement>(null);

  const scrollDown = () => {
    if (hpDownRef.current) {
      hpDownRef.current.style.transform = "translateY(-100%)";
      setTimeout(() => {
        if (hpRef.current) hpRef.current.style.zIndex = "1";
      }, 800);
    }
  };

  const scrollUp = () => {
    if (hpDownRef.current) {
      hpDownRef.current.style.transform = "translateY(0%)";
      if (hpRef.current) hpRef.current.style.zIndex = "-1";
    }
  };

  return (
    <div ref={hpRef} className="hp">
      <section className="hp-up">
        <h1 className="hp-up-title">Umów się na szybką i bezpieczną wizytę u twojego lekarza.</h1>
        <div onClick={scrollDown} className="hp-up-triangle"></div>
      </section>
      <div ref={hpDownRef} className="hp-down">
        <div onClick={scrollUp} className="hp-down-triangle"></div>
        <HomePageFooter />
      </div>
      ;
    </div>
  );
};

export default Home;
