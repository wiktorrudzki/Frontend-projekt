import Button from "@/components/button";
import { useVisit } from "@/hooks/useVisit/useVisit";
import { DoctorType } from "@/types/DoctorType";
import { visitEachChild } from "typescript";
import Visit from "./Visit";

type Props = {
  doctor: DoctorType;
  price: number;
  reason: string;
  date: string;
};

const VisitWrapper = ({ doctor, price, reason, date }: Props) => {
  const { setAllVisits } = useVisit();

  const removeVisit = () => {
    setAllVisits((prevVisits) => {
      return prevVisits.filter((visit) => {
        return (
          new Date(visit.date).toLocaleString() !== date ||
          visit.doctor !== doctor ||
          visit.reason !== reason ||
          visit.price !== price
        );
      });
    });
  };

  return (
    <div className="visit-wrapper">
      <Visit
        photo={doctor.photo}
        name={doctor.name}
        price={price}
        reason={reason}
        date={date}
        type={doctor.type}
      />
      <Button onClick={removeVisit} content="anuluj" btnType="btn-warning" />
    </div>
  );
};

export default VisitWrapper;
