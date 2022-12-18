import Button from "@/components/button";
import { useVisit } from "@/hooks/useVisit/useVisit";
import { handlePrevSlide } from "../slides/handlers/handlePrevSlide";

type Props = {
  sliderRef: React.MutableRefObject<HTMLDivElement | null>;
  handleNextSlide: () => void;
  titleRight: string;
  titleLeft: string;
  btnPrevContent: string;
  btnNextContent: string;
  clearWhenBack: boolean;
  prevElement: HTMLElement;
  currentDoctor: JSX.Element;
  rightContent: JSX.Element;
  translateTo: string;
};

const SlideWrapper = ({
  sliderRef,
  handleNextSlide,
  titleRight,
  titleLeft,
  btnPrevContent,
  btnNextContent,
  clearWhenBack,
  prevElement,
  currentDoctor,
  rightContent,
  translateTo
}: Props) => {
  const { visit, dispatchVisit } = useVisit();

  return (
    <>
      {visit.doctor && (
        <div className="slide-wrapper">
          <section className="slide-section">
            <div>
              <h2>{titleLeft}</h2>
              {currentDoctor}
            </div>
            <Button
              onClick={() => handlePrevSlide(sliderRef, dispatchVisit, clearWhenBack, prevElement, translateTo)}
              content={btnPrevContent}
              btnType="btn-tertiary"
            />
          </section>
          <section className="slide-section">
            <div>
              <h2>{titleRight}</h2>
              {rightContent}
            </div>
            <Button onClick={handleNextSlide} content={btnNextContent} btnType="btn-primary" />
          </section>
        </div>
      )}
    </>
  );
};

export default SlideWrapper;
