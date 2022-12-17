import Button from "@/components/button";
import { useVisit } from "@/hooks/useVisit/useVisit";
import { useState, useEffect } from "react";
import { handlePrevSlide } from "../slides/handlers/handlePrevSlide";

type Props = {
  sliderRef: React.MutableRefObject<HTMLDivElement | null>;
  handleNextSlide: () => void;
  titleRight: string;
  titleLeft: string;
  btnPrevContent: string;
  btnNextContent: string;
  clean: boolean;
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
  clean,
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
    <Button
      onClick={() => handlePrevSlide(sliderRef, dispatchVisit, clean, prevElement, translateTo)}
      content={btnPrevContent}
      btnType="btn-tertiary"
    />
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
            {!isMobile && prevButton}
          </section>
          <section className="slide-section">
            <div>
              <h2>{titleRight}</h2>
              {rightContent}
            </div>
            <Button onClick={handleNextSlide} content={btnNextContent} btnType="btn-primary" />
            {isMobile && prevButton}
          </section>
        </div>
      )}
    </>
  );
};

export default SlideWrapper;
