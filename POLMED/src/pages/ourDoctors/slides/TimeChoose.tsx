import { useVisit } from "@/hooks/useVisit/useVisit";
import { Link } from "react-router-dom";
import Doctor from "../components/Doctor";
import SlideWrapper from "../components/SlideWrapper";
import { ActionTypes } from "@/hooks/useVisit/types";
import { visitHours } from "@/data/visitHours";
import { visitReasons } from "@/data/visitReasons";

type Props = {
  sliderRef: React.MutableRefObject<HTMLDivElement | null>;
};

const TimeChoose = ({ sliderRef }: Props) => {
  const { visit, dispatchVisit } = useVisit();

  const handleNextSlide = () => {
    if (sliderRef.current && visit.date && !new Date(visit.date).toString().includes("00:00:00")) {
      sliderRef.current.style.setProperty("transform", "translate(-300vw)");
    }
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (visit.date) {
      dispatchVisit({
        type: ActionTypes.date,
        payload: new Date(
          new Date(visit.date).toString().replace("00:00:00", e.target.value + ":00")
        ).getTime()
      });
    }

    e.target.blur();
  };

  const handleReasonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatchVisit({
      type: ActionTypes.reason,
      payload: e.target.value
    });

    e.target.blur();
  };

  return (
    <>
      {visit.doctor && visit.date && (
        <div className="time-choose-page slide">
          <SlideWrapper
            sliderRef={sliderRef}
            handleNextSlide={handleNextSlide}
            titleLeft="Podsumowanie:"
            titleRight="Wybierz godzinę wizyty:"
            btnPrevContent="wróć"
            btnNextContent="umów się"
            clean={false}
            prevElement={document.querySelector(".date-choose-page") as HTMLElement}
            currentDoctor={
              <Doctor
                name={visit.doctor.name}
                photo={visit.doctor.photo}
                type={visit.doctor.type}
                date={new Date(visit.date).toLocaleDateString()}
                isBooked={true}
              />
            }
            rightContent={
              <div className="time-choose-right-content">
                <label>
                  <select
                    onChange={handleTimeChange}
                    className="time-choose-selector"
                    name="reason"
                    id="reason">
                    {visitHours.map((hour) => (
                      <option key={hour} disabled={visit.doctor?.hoursTaken.includes(hour)}>
                        {hour}
                      </option>
                    ))}
                  </select>
                </label>
                <div>
                  <h2>Wybierz cel wizyty:</h2>
                  <label>
                    <select
                      onChange={handleReasonChange}
                      className="time-choose-selector"
                      name="reason"
                      id="reason">
                      {visitReasons.map((reason) => (
                        <option key={reason}>{reason}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <div>
                  <Link to="/pricing">Zobacz aktualny cennik usług</Link>
                  <p>Płatność tylko kartą lub gotówką w placówce</p>
                </div>
              </div>
            }
            translateTo="-100"
          />
        </div>
      )}
    </>
  );
};

export default TimeChoose;
