import Button from "@/components/button";
import { DoctorType } from "@/types/DoctorType";
import Visit from "./Visit";

type Props = {
  doctor: DoctorType;
  price: number;
  reason: string;
  date: string;
};

const VisitWrapper = ({ doctor, price, reason, date }: Props) => {
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
      <Button content="anuluj" btnType="btn-warning" />
    </div>
  );
};

export default VisitWrapper;
