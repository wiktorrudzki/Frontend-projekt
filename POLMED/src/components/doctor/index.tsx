import VisitInfo from "./components/VisitInfo";

type Props = {
  photo: string;
  name: string;
  type: "pediatra" | "lekarz rodzinny";
  price?: number;
  reason?: string;
  date?: string;
  isBooked?: boolean;
};

const Doctor = ({ photo, name, type, price, reason, date, isBooked }: Props) => {
  return (
    <div className="doctor">
      {/* TODO problem with quality of image when using img tag and styling it with object-fit: cover */}
      <div className="doctor-img"></div>
      <div className="doctor-info-wrapper">
        <div className="doctor-name">
          <i className="doctor-name--doctor-icon"></i>
          <h5>{name}</h5>
        </div>
        {date && (
          <VisitInfo
            content={`${isBooked ? "Wybrany termin: " : "Najbliższy wolny termin: "}: ${date}`}
            iconClassName="doctor-feature--icon__calendar"
          />
        )}
        <VisitInfo content={type} iconClassName="doctor-feature--icon__stethoscope" />
        {reason && (
          <VisitInfo
            content={`Cel wizyty: ${reason}`}
            iconClassName="doctor-feature--icon__briefcase"
          />
        )}
        {price && (
          <VisitInfo content={`Koszt: ${price}zł`} iconClassName="doctor-feature--icon__money" />
        )}
      </div>
    </div>
  );
};

export default Doctor;
