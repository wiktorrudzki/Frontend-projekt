import Button from "@/components/button";
import { useVisit } from "@/hooks/useVisit/useVisit";
import { useState, useEffect } from "react";
import { handlePrevSlide } from "../slides/handlers/handlePrevSlide";

type Props = {
  sliderRef: React.MutableRefObject<HTMLDivElement | null>;
  handleNextSlide?: () => void;
  titleRight: string;
  titleLeft: string;
  btnPrevContent?: string;
  btnNextContent?: string;
  clearWhenBack: boolean;
  prevElement?: HTMLElement;
  currentDoctor: JSX.Element;
  rightContent: JSX.Element;
  translateTo?: string;
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
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  const prevButton = (
    <>
      {prevElement && btnPrevContent && translateTo && (
        <Button
          onClick={() =>
            handlePrevSlide(sliderRef, dispatchVisit, clearWhenBack, prevElement, translateTo)
          }
          content={btnPrevContent}
          btnType="btn-tertiary"
        />
      )}
    </>
  );

  return (
    <>
      {visit.doctor && (
        <div className="slide-wrapper">
          <section className="slide-section">
            <div>
              <h2>{titleLeft}</h2>
              {currentDoctor}
            </div>
            {!isMobile && btnPrevContent && translateTo && prevElement && prevButton}
          </section>
          <section className="slide-section">
            <div>
              <h2>{titleRight}</h2>
              {rightContent}
            </div>
            {handleNextSlide && btnNextContent && (
              <Button onClick={handleNextSlide} content={btnNextContent} btnType="btn-primary" />
            )}
            {isMobile && btnPrevContent && translateTo && prevElement && prevButton}
          </section>
        </div>
      )}
    </>
  );
};

export default SlideWrapper;
