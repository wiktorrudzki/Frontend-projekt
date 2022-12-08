import VisitInfoWrapper from "../../../components/visit/VisitInfoWrapper";

type Props = {
  photo: string;
  name: string;
  type: "Pediatra" | "Lekarz rodzinny";
  price?: number;
  reason?: string;
  date?: string;
  isBooked?: boolean;
};

const Doctor = ({ photo, name, type, price, reason, date, isBooked }: Props) => {
  return (
    <div className="doctor">
      <div style={{ backgroundImage: `url(${photo}` }} className="doctor-img"></div>
      <VisitInfoWrapper
        name={name}
        type={type}
        price={price}
        reason={reason}
        date={date}
        isBooked={isBooked}
      />
    </div>
  );
};

export default Doctor;
