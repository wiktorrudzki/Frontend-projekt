import DoctorWrapper from "../components/DoctorWrapper";
import { doctors } from "@/data/doctors";

type Props = {
  sliderRef: React.MutableRefObject<HTMLDivElement | undefined>;
};

const Doctors = ({ sliderRef }: Props) => {
  const paediatricians = doctors.filter((doctor) => doctor.type === "Pediatra");
  const generals = doctors.filter((doctor) => doctor.type === "Lekarz rodzinny");

  return (
    <div className="doctors-page slide">
      <div className="doctors-doctors">
        <h2 className="doctors-title">Pediatra</h2>
        {paediatricians.map((doctor) => {
          return <DoctorWrapper key={doctor.name} doctor={doctor} />;
        })}
      </div>
      <div className="doctors-doctors">
        <h2 className="doctors-title">Lekarz rodzinny</h2>
        {generals.map((doctor) => {
          return <DoctorWrapper key={doctor.name} doctor={doctor} />;
        })}
      </div>
    </div>
  );
};

export default Doctors;
