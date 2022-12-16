import { ActionType, ActionTypes } from "@/hooks/useVisit/types";

// eslint-disable-next-line no-unused-vars
export const handlePrevSlide = (
  sliderRef: React.MutableRefObject<HTMLDivElement | null>,
  dispatchVisit: (value: ActionType) => void,
  clear: boolean,
  prevElement: HTMLElement,
  translateTo: string
) => {
  if (sliderRef.current) {
    sliderRef.current.style.setProperty("transform", `translateX(${translateTo}vw)`);
    prevElement.classList.remove("inactive-slide");
    if (clear) {
      setTimeout(() => {
        dispatchVisit({ type: ActionTypes.clear });
      }, 500);
    }
  }
};
