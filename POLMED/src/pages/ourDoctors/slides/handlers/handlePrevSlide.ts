import { ActionType, ActionTypes } from "@/hooks/useVisit/types";

export const handlePrevSlide = (
  sliderRef: React.MutableRefObject<HTMLDivElement | null>,
  // eslint-disable-next-line no-unused-vars
  dispatchVisit: (value: ActionType) => void,
  clearWhenBack: boolean,
  prevElement: HTMLElement,
  translateTo: string,
) => {
  if (sliderRef.current) {
    sliderRef.current.style.setProperty("transform", `translateX(${translateTo}vw)`);
    prevElement.classList.remove("inactive-slide");
    if (clearWhenBack) {
      setTimeout(() => {
        dispatchVisit({ type: ActionTypes.clear });
      }, 500);
    }
  }
};
