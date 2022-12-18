import { DoctorType } from "@/types/DoctorType";
import { NewVisitType, VisitType } from "@/types/VisitTypes";

export enum ActionTypes {
  // eslint-disable-next-line no-unused-vars
  doctor = "DOCTOR",
  // eslint-disable-next-line no-unused-vars
  date = "DATE",
  // eslint-disable-next-line no-unused-vars
  reason = "REASON",
  // eslint-disable-next-line no-unused-vars
  clear = "CLEAR",
  // eslint-disable-next-line no-unused-vars
  name = "NAME",
  // eslint-disable-next-line no-unused-vars
  surrname = "SURRNAME",
  // eslint-disable-next-line no-unused-vars
  id = "ID",
  // eslint-disable-next-line no-unused-vars
  email = "EMAIL"
}

export type ActionType =
  | { type: ActionTypes.date; payload: number }
  | { type: ActionTypes.doctor; payload: DoctorType }
  | { type: ActionTypes.reason; reason: string; price: number }
  | { type: ActionTypes.name; payload: string }
  | { type: ActionTypes.surrname; payload: string }
  | { type: ActionTypes.id; payload: string }
  | { type: ActionTypes.email; payload: string }
  | { type: ActionTypes.clear };

export type VisitContextType = {
  visit: NewVisitType;
  dispatchVisit: React.Dispatch<ActionType>;
  allVisits: VisitType[];
  setAllVisits: React.Dispatch<React.SetStateAction<VisitType[]>>;
};
