import { ActionType, ActionTypes, VisitType } from "./types";

export const updateVisit = (state: VisitType, action: ActionType) => {
  switch (action.type) {
    case ActionTypes.doctor:
      return { ...state, doctor: action.payload };
    case ActionTypes.date:
      return { ...state, date: action.payload };
    default:
      return state;
  }
};
