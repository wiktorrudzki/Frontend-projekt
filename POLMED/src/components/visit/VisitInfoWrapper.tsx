import Button from "../button";
import VisitInfo from "./VisitInfo";

type Props = {
  name: string;
  type: "Pediatra" | "Lekarz rodzinny";
  price?: number;
  reason?: string;
  date?: string;
  isBooked?: boolean;
  onClick?: () => void;
  doctorsSlide?: boolean;
};

const VisitInfoWrapper = ({
  name,
  date,
  isBooked,
  reason,
  type,
  price,
  onClick,
  doctorsSlide
}: Props) => {
  return (
    <div className="visit-info-wrapper">
      <div className="visit-name">
        <i className="visit-name--visit-icon"></i>
        <h5>{name}</h5>
      </div>
      {date && (
        <VisitInfo
          content={`${
            isBooked ? `Wybrany termin: ${date.slice(0, -3)}` : `Najbliższy wolny termin: ${date}`
          }`}
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
      {doctorsSlide && <Button onClick={onClick} content="umów się" btnType="btn-secondary" />}
    </div>
  );
};

export default VisitInfoWrapper;
