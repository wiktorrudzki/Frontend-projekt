import { NewVisitType } from "@/types/VisitTypes";
import { ActionType, ActionTypes } from "./types";

export const updateVisit = (state: NewVisitType, action: ActionType) => {
  switch (action.type) {
    case ActionTypes.doctor:
      return { ...state, doctor: action.payload };
    case ActionTypes.date:
      return { ...state, date: action.payload };
    case ActionTypes.name:
      return { ...state, name: action.payload };
    case ActionTypes.surrname:
      return { ...state, surrname: action.payload };
    case ActionTypes.id:
      return { ...state, id: action.payload };
    case ActionTypes.email:
      return { ...state, email: action.payload };
    case ActionTypes.reason:
      return {
        ...state,
        reason: action.reason,
        price: action.price
      };
    case ActionTypes.clear:
      return {
        doctor: null,
        date: null,
        reason: "Wizyta kontrolna",
        price: 50,
        name: "",
        surrname: "",
        id: "",
        email: ""
      };
    default:
      return state;
  }
};
