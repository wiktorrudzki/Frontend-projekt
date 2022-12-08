import { doctors } from "@/data/doctors";
import VisitWrapper from "./components/VisitWrapper";

const MyAccount = () => {
  const generals = doctors.filter((doctor) => doctor.type === "Lekarz rodzinny");

  return (
    <div className="visit-page">
      {generals.map((doctor) => {
        return (
          <VisitWrapper
            key={doctor.name}
            photo={doctor.photo}
            date={doctor.date}
            type={doctor.type}
            name={doctor.name}
            price={50}
            reason="wizyta kontrolna"
          />
        );
      })}
    </div>
  );
};

export default MyAccount;
