import { NewVisitType } from "@/types/VisitTypes";
import { ActionType, ActionTypes } from "./types";

export const updateVisit = (state: NewVisitType, action: ActionType) => {
  switch (action.type) {
    case ActionTypes.doctor:
      return { ...state, doctor: action.payload };
    case ActionTypes.date:
      return { ...state, date: action.payload };
    case ActionTypes.clear:
      return {
        doctor: null,
        date: null,
        reason: "",
        price: 0
      };
    default:
      return state;
  }
};
