import { useVisit } from "@/hooks/useVisit/useVisit";
import Doctor from "../components/Doctor";
import SlideWrapper from "../components/SlideWrapper";
import { Link, useNavigate } from "react-router-dom";
import Button from "@/components/button";
import { useLogin } from "@/hooks/useLogin/useLogin";

type Props = {
  sliderRef: React.MutableRefObject<HTMLDivElement | null>;
};

const VisitSummary = ({ sliderRef }: Props) => {
  const { allVisits } = useVisit();
  const { isLoggedIn } = useLogin();
  const navigate = useNavigate();

  const handleEndReservation = () => {
    navigate("/");
  };

  console.log(allVisits);

  return (
    <div className="visit-summary-page slide">
      <SlideWrapper
        sliderRef={sliderRef}
        titleLeft="Podsumowanie:"
        titleRight="Dziękujemy za rejestrację online!"
        clearWhenBack={false}
        currentDoctor={
          <Doctor
            photo={allVisits[allVisits.length - 1].doctor.photo}
            name={allVisits[allVisits.length - 1].doctor.name}
            type={allVisits[allVisits.length - 1].doctor.type}
            price={allVisits[allVisits.length - 1].price}
            isBooked={true}
            reason={allVisits[allVisits.length - 1].reason}
            date={new Date(allVisits[allVisits.length - 1].date).toLocaleString()}
          />
        }
        rightContent={
          <div className="visit-summary-right-content">
            {isLoggedIn ? (
              <p>
                W celu <Link to="/myAccount">anulowania</Link> wizyty przejdź do zakładki “Moje
                konto” lub skontaktuj się z nami telefonicznie
              </p>
            ) : (
              <p>
                W celu <span>anulowania</span> wizyty skontaktuj się z nami telefonicznie
              </p>
            )}
            <i></i>
          </div>
        }
      />
      <Button onClick={handleEndReservation} content="Strona Główna" btnType="btn-primary" />
    </div>
  );
};

export default VisitSummary;
