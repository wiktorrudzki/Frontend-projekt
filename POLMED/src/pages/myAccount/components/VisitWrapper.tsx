import Button from "@/components/button";
import Visit from "./Visit";

type Props = {
  photo: string;
  name: string;
  type: "Pediatra" | "Lekarz rodzinny";
  price: number;
  reason: string;
  date: string;
};

const VisitWrapper = ({ photo, name, type, price, reason, date }: Props) => {
  return (
    <div className="visit-wrapper">
      <Visit photo={photo} name={name} price={price} reason={reason} date={date} type={type} />
      <Button content="anuluj" btnType="btn-warning" />
    </div>
  );
};

export default VisitWrapper;
