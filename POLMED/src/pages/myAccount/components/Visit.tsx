import VisitInfoWrapper from "@/components/visit/VisitInfoWrapper";

type Props = {
  photo: string;
  name: string;
  type: "Pediatra" | "Lekarz rodzinny";
  price: number;
  reason: string;
  date: string;
};

function Visit({ name, photo, type, price, reason, date }: Props) {
  return (
    <div className="visit">
      <div style={{ backgroundImage: `url(${photo}` }} className="doctor-img doctor-img-hide"></div>
      <VisitInfoWrapper
        name={name}
        type={type}
        price={price}
        reason={reason}
        date={date}
        isBooked={true}
      />
    </div>
  );
}

export default Visit;
