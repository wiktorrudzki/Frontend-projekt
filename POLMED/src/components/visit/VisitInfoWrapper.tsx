import VisitInfo from "./VisitInfo";

type Props = {
  name: string;
  type: "Pediatra" | "Lekarz rodzinny";
  price?: number;
  reason?: string;
  date?: string;
  isBooked?: boolean;
};

const VisitInfoWrapper = ({ name, date, isBooked, reason, type, price }: Props) => {
  return (
    <div className="visit-info-wrapper">
      <div className="visit-name">
        <i className="visit-name--visit-icon"></i>
        <h5>{name}</h5>
      </div>
      {date && (
        <VisitInfo
          content={`${isBooked ? "Wybrany termin: " : "Najbliższy wolny termin: "}${date.slice(
            0, -3
          )}`}
          iconClassName="visit-feature--icon__calendar"
        />
      )}
      <VisitInfo content={type} iconClassName="visit-feature--icon__stethoscope" />
      {reason && (
        <VisitInfo
          content={`Cel wizyty: ${reason}`}
          iconClassName="visit-feature--icon__briefcase"
        />
      )}
      {price && (
        <VisitInfo content={`Koszt: ${price}zł`} iconClassName="visit-feature--icon__money" />
      )}
    </div>
  );
};

export default VisitInfoWrapper;
