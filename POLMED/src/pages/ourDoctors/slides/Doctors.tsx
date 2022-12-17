import DoctorWrapper from "../components/DoctorWrapper";
import { doctors } from "@/data/doctors";
import { useVisit } from "@/hooks/useVisit/useVisit";
import { DoctorType } from "@/types/DoctorType";
import { ActionTypes } from "@/hooks/useVisit/types";

type Props = {
  sliderRef: React.MutableRefObject<HTMLDivElement | null>;
};

const Doctors = ({ sliderRef }: Props) => {
  const paediatricians = doctors.filter((doctor) => doctor.type === "Pediatra");
  const generals = doctors.filter((doctor) => doctor.type === "Lekarz rodzinny");
  const { dispatchVisit } = useVisit();

  const handleNextSlide = (doctor: DoctorType) => {
    dispatchVisit({ type: ActionTypes.doctor, payload: doctor });
    if (sliderRef.current) {
      sliderRef.current.style.setProperty("transform", "translateX(-100vw)");
      setTimeout(() => {
        (document.querySelector(".doctors-page") as HTMLElement).classList.add("inactive-slide");
      }, 300);
    }
  };

  return (
    <div className="doctors-page slide">
      <div className="doctors-doctors">
        <h2 className="doctors-title">Pediatra</h2>
        {paediatricians.map((doctor) => {
          return (
            <DoctorWrapper
              onClick={() => handleNextSlide(doctor)}
              key={doctor.name}
              doctor={doctor}
            />
          );
        })}
      </div>
      <div className="doctors-doctors">
        <h2 className="doctors-title">Lekarz rodzinny</h2>
        {generals.map((doctor) => {
          return (
            <DoctorWrapper
              onClick={() => handleNextSlide(doctor)}
              key={doctor.name}
              doctor={doctor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Doctors;
