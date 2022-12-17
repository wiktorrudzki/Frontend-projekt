import { useVisit } from "@/hooks/useVisit/useVisit";
import Calendar from "../components/calendar";
import Doctor from "../components/Doctor";
import SlideWrapper from "../components/SlideWrapper";

type Props = {
  sliderRef: React.MutableRefObject<HTMLDivElement | null>;
};

const DateChoose = ({ sliderRef }: Props) => {
  const { visit } = useVisit();

  const handleNextSlide = () => {
    if (sliderRef.current && visit.date) {
      sliderRef.current.style.setProperty("transform", "translate(-200vw)");
    }
  };

  return (
    <>
      {visit.doctor && (
        <>
          <div className="date-choose-page slide">
            <SlideWrapper
              sliderRef={sliderRef}
              handleNextSlide={handleNextSlide}
              titleRight="Wybierz termin wizyty:"
              titleLeft="Podsumowanie:"
              btnPrevContent="wróć"
              btnNextContent="dalej"
              prevElement={document.querySelector(".doctors-page") as HTMLElement}
              clearWhenBack={true}
              currentDoctor={
                <Doctor
                  name={visit.doctor.name}
                  photo={visit.doctor.photo}
                  type={visit.doctor.type}
                />
              }
              rightContent={<Calendar />}
              translateTo="0"
            />
          </div>
        </>
      )}
    </>
  );
};

export default DateChoose;
