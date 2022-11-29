import HomePageFooter from "@/components/footers/home-page";
import { useRef } from "react";
import building from "@/img/building.jpg";
import NFZLogo from "@/img/NFZ_logo.svg";
import "./styles/style.scss";
import "./styles/home-up.scss";
import "./styles/home-down.scss";

const Home = () => {
  const hpDownRef = useRef<null | HTMLDivElement>(null);
  const hpRef = useRef<null | HTMLDivElement>(null);

  const scrollDown = () => {
    if (hpDownRef.current) {
      hpDownRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollUp = () => {
    if (hpRef.current) {
      hpRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hp">
      <section ref={hpRef} className="hp-up">
        <h1 className="hp-up-title">Umów się na szybką i bezpieczną wizytę u twojego lekarza.</h1>
        <div onClick={scrollDown} className="hp-up-triangle"></div>
      </section>
      <div ref={hpDownRef} className="hp-down">
        <div onClick={scrollUp} className="hp-down-triangle"></div>
        <section className="hp-down-section">
          <div className="hp-down-section-info">
            <p className="hp-down-section-text">
              Dobro naszych pacjentów jest dla nas najważniejsze, dlatego placówka POLmed
              współpracuje z Narodowym Funduszem Zdrowia w celu zmniejszenia kosztów prowadzonych
              usług.{" "}
            </p>
            <img className="hp-down-section-logo" src={NFZLogo} alt="nfz logo" />
          </div>
          <img className="hp-down-section-building" src={building} alt="building" />
        </section>
        <HomePageFooter />
      </div>
    </div>
  );
};

export default Home;
