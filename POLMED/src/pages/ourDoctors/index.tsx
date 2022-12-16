import { useRef } from "react";
import DateChoose from "./slides/DateChoose";
import Doctors from "./slides/Doctors";
import TimeChoose from "./slides/TimeChoose";
import VisitForm from "./slides/VisitForm";
import VisitSummary from "./slides/VisitSummary";

const OurDoctors = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="our-doctors-page">
      <div ref={sliderRef} className="slider">
        <Doctors sliderRef={sliderRef} />
        <DateChoose sliderRef={sliderRef} />
        <TimeChoose sliderRef={sliderRef} />
        <VisitForm sliderRef={sliderRef} />
        <VisitSummary sliderRef={sliderRef} />
      </div>
    </div>
  );
};

export default OurDoctors;
