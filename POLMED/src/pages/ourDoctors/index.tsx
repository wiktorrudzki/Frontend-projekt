import DoctorWrapper from "./components/DoctorWrapper";
import { doctors } from "@/data/doctors";

const OurDoctors = () => {
  const paediatricians = doctors.filter((doctor) => doctor.type === "Pediatra");
  const generals = doctors.filter((doctor) => doctor.type === "Lekarz rodzinny");

  return (
    <section className="ourDoctors-page">
      <div className="ourDoctors-doctors">
        <h2 className="ourDoctors-title">Pediatra</h2>
        {paediatricians.map((doctor) => {
          return <DoctorWrapper key={doctor.name} doctor={doctor} />;
        })}
      </div>
      <div className="ourDoctors-doctors">
        <h2 className="ourDoctors-title">Lekarz rodzinny</h2>
        {generals.map((doctor) => {
          return <DoctorWrapper key={doctor.name} doctor={doctor} />;
        })}
      </div>
    </section>
  );
};

export default OurDoctors;
