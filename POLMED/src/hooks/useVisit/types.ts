import { DoctorType } from "@/types/DoctorType";

export enum ActionTypes {
  // eslint-disable-next-line no-unused-vars
  doctor = "DOCTOR",
  // eslint-disable-next-line no-unused-vars
  date = "DATE"
}

export type ActionType =
  | { type: ActionTypes.date; payload: number }
  | { type: ActionTypes.doctor; payload: DoctorType };

export type VisitType = {
  doctor: DoctorType;
  date: number | null;
};

export type VisitContextType = [VisitType, React.Dispatch<ActionType>];
