import { useVisit } from "@/hooks/useVisit/useVisit";
import Doctor from "../components/Doctor";
import SlideWrapper from "../components/SlideWrapper";
import { Link, useNavigate } from "react-router-dom";
import Button from "@/components/button";
import { useLogin } from "@/hooks/useLogin/useLogin";
import { ActionTypes } from "@/hooks/useVisit/types";

type Props = {
  sliderRef: React.MutableRefObject<HTMLDivElement | null>;
};

const VisitSummary = ({ sliderRef }: Props) => {
  const { visit } = useVisit();
  const { isLoggedIn } = useLogin();
  const navigate = useNavigate();

  const handleEndReservation = () => {
    navigate("/");
  };

  return (
    <>
      {visit.doctor && visit.date && visit.price && visit.reason && (
        <div className="visit-summary-page slide">
          <SlideWrapper
            sliderRef={sliderRef}
            titleLeft="Podsumowanie:"
            titleRight="Dziękujemy za rejestrację online!"
            clearWhenBack={false}
            currentDoctor={
              <Doctor
                photo={visit.doctor.photo}
                name={visit.doctor.name}
                type={visit.doctor.type}
                price={visit.price}
                isBooked={true}
                reason={visit.reason}
                date={new Date(visit.date).toLocaleString()}
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
      )}
    </>
  );
};

export default VisitSummary;
