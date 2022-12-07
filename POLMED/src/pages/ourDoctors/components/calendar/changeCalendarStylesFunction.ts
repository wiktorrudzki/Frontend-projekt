export const changeStyles = () => {
  const btns = document.getElementsByClassName("react-calendar__month-view__days__day");
  for (let i = 0; i < btns.length; i++) {
    if (!(btns[i] as HTMLButtonElement).disabled) {
      (btns[i] as HTMLButtonElement).style.setProperty("background-color", "#0099cc33");
      (btns[i] as HTMLButtonElement).style.setProperty("color", "#0099cc");
    } else {
      (btns[i] as HTMLButtonElement).style.setProperty("background-color", "#99999933");
      (btns[i] as HTMLButtonElement).style.setProperty("color", "#999999");
    }
  }

  const neighbourMonthBtns = document.getElementsByClassName(
    "react-calendar__month-view__days__day--neighboringMonth"
  );
  for (let i = 0; i < neighbourMonthBtns.length; i++) {
    (neighbourMonthBtns[i] as HTMLElement).style.setProperty("background-color", "#99999910");
  }
};
