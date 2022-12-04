import { useRef } from "react";
import triangleBlue from "@/img/icons/caret-blue.svg";
import triangleWhite from "@/img/icons/caret-white.svg";
import BuildingPhotoComponent from "@/components/buildingPhotoComponent";
import NFZLogo from "@/img/NFZ_logo.svg";

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
        <h1 className="hp-up-title">
          <span>Umów się na szybką</span>
          <span>i bezpieczną wizytę</span>
          <span>u twojego lekarza.</span>
        </h1>
        <img onClick={scrollDown} src={triangleWhite} className="hp-up-triangle" />
      </section>
      <div ref={hpDownRef} className="hp-down">
        <BuildingPhotoComponent>
          <p className="hp-down-building-photo-section-text">
            Dobro naszych pacjentów jest dla nas najważniejsze, dlatego placówka POLmed współpracuje
            z Narodowym Funduszem Zdrowia w celu zmniejszenia kosztów prowadzonych usług.{" "}
          </p>
          <img className="hp-down-building-photo-section-logo" src={NFZLogo} alt="nfz logo" />
        </BuildingPhotoComponent>
        <img className="hp-down-triangle" onClick={scrollUp} src={triangleBlue} alt="scroll-icon" />
      </div>
    </div>
  );
};

export default Home;
