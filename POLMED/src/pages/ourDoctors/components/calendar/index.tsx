import { ActionTypes } from "@/hooks/useVisit/types";
import { useVisit } from "@/hooks/useVisit/useVisit";
import { useEffect } from "react";
import CalendarComponent from "react-calendar";
import { changeStyles } from "./changeCalendarStylesFunction";

const Calendar = () => {
  const { visit, dispatchVisit } = useVisit();

  //eslint-disable-next-line
  const checkIfDisable = (e: any) => {
    return (
      visit.doctor?.datesTaken.includes(e.date.getTime()) ||
      e.date.getDay() === 0 ||
      e.date.getDay() === 6 ||
      e.date.getMonth() !== e.activeStartDate.getMonth()
    );
  };

  //eslint-disable-next-line
  const handleChangeDate = (e: any) => {
    dispatchVisit({ type: ActionTypes.date, payload: e.getTime() });
    changeStyles();
  };

  useEffect(() => {
    const calendarTitle = document.querySelector(".react-calendar__navigation__label");
    (calendarTitle as HTMLElement).setAttribute("disabled", "true");
    (calendarTitle as HTMLElement).style.setProperty("background-color", "transparent");
    changeStyles();
  }, []);

  return (
    <div>
      <div className="calendar-container">
        <CalendarComponent
          minDetail="month"
          onChange={handleChangeDate}
          value={visit.date ? new Date(visit.date) : null}
          minDate={new Date()}
          tileDisabled={checkIfDisable}
          onActiveStartDateChange={changeStyles}
          nextLabel={<i className="triangle triangle-right"></i>}
          prevLabel={<i className="triangle triangle-left"></i>}
        />
      </div>
    </div>
  );
};

export default Calendar;
