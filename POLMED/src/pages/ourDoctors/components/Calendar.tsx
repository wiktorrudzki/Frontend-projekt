import { useEffect, useState } from "react";
import CalendarComponent from "react-calendar";

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const btns = document.getElementsByClassName(
      "react-calendar__tile react-calendar__month-view__days__day"
    );

    for (const btn of btns) {
      console.log(btn.children[0].ariaLabel);
    }
  }, []);

  return (
    <div>
      <div className="calendar-container">
        <CalendarComponent onChange={setDate} value={date} />
      </div>
      <p className="text-center">
        <span className="bold">Selected Date:</span>
        {date.toDateString()}
      </p>
    </div>
  );
};

export default Calendar;
