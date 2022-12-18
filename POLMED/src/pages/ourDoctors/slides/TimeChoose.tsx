import { useVisit } from "@/hooks/useVisit/useVisit";
import { Link } from "react-router-dom";
import Doctor from "../components/Doctor";
import SlideWrapper from "../components/SlideWrapper";
import { ActionTypes } from "@/hooks/useVisit/types";
import { visitHours } from "@/data/visitHours";
import { visitDetails } from "@/data/visitDetails";

type Props = {
  sliderRef: React.MutableRefObject<HTMLDivElement | null>;
};

const TimeChoose = ({ sliderRef }: Props) => {
  const { visit, dispatchVisit } = useVisit();

  let currentHour: string;
  let currentMinutes: string;

  if (visit.date) {
    currentHour = new Date(visit.date).getHours().toString();
    currentMinutes = new Date(visit.date).getMinutes().toString().slice(0, 1);
  }

  const handleNextSlide = () => {
    if (sliderRef.current && visit.date && !new Date(visit.date).toString().includes("00:00:00")) {
      sliderRef.current.style.setProperty("transform", "translate(-300vw)");
    }
  };

  const compareHoursAndMinutes = (hour: string) => {
    return hour === currentHour + ":" + currentMinutes + "0";
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "Wybierz godzinę...") {
      const lastDateIndex = visitHours.findIndex(compareHoursAndMinutes);
      e.target.selectedIndex = lastDateIndex;
      return;
    }
    let newMinutes: number;
    let newHour: number;

    if (e.target.value.length === 5) {
      newHour = parseInt(e.target.value.slice(0, 2));
      newMinutes = parseInt(e.target.value.slice(3));
    } else {
      newHour = parseInt(e.target.value.slice(0, 1));
      newMinutes = parseInt(e.target.value.slice(2));
    }

    if (visit.date) {
      dispatchVisit({
        type: ActionTypes.date,
        payload: new Date(new Date(visit.date).setHours(newHour, newMinutes)).getTime()
      });
    }

    e.target.blur();
  };

  const handleReasonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatchVisit({
      type: ActionTypes.reason,
      reason: e.target.value.split(",")[0],
      price: parseInt(e.target.value.split(",")[1])
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
            clearWhenBack={false}
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
                    {visitHours.map((hour) => {
                      if (visit.date)
                        return (
                          <option
                            selected={compareHoursAndMinutes(hour)}
                            value={hour}
                            key={hour}
                            disabled={visit.doctor?.hoursTaken.includes(hour)}>
                            {hour}
                          </option>
                        );
                    })}
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
                      {visitDetails.map((detail) => (
                        <option
                          value={[detail.reason, detail.price.toString()]}
                          selected={visit.reason === detail.reason}
                          key={detail.reason}>
                          {detail.reason}
                        </option>
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
