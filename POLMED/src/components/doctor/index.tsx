import VisitInfo from "./components/VisitInfo";
import doctorIcon from "@/img/icons/user-doctor-solid.svg";
import calendarIcon from "@/img/icons/calendar-solid.svg";
import stethoscopeIcon from "@/img/icons/stethoscope-solid.svg";
import moneyIcon from "@/img/icons/money-bills-solid.svg";
import briefcaseIcon from "@/img/icons/briefcase-medical-solid.svg";
import "./style.scss";

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
          <img src={doctorIcon} />
          <h5>{name}</h5>
        </div>
        {date && (
          <VisitInfo
            content={`${isBooked ? "Wybrany termin: " : "Najbliższy wolny termin: "}: ${date}`}
            icon={calendarIcon}
          />
        )}
        <VisitInfo content={type} icon={stethoscopeIcon} />
        {reason && <VisitInfo content={`Cel wizyty: ${date}`} icon={briefcaseIcon} />}
        {price && <VisitInfo content={`Koszt: ${price}`} icon={moneyIcon} />}
      </div>
    </div>
  );
};

export default Doctor;
