import { DoctorType } from "./DoctorType";

export type NewVisitType = {
  doctor: DoctorType | null;
  date: number | null;
  price: number;
  reason: string;
  name: string;
  surrname: string;
  id: string;
  email: string;
};

export type VisitType = {
  doctor: DoctorType;
  date: number;
  price: number;
  reason: string;
};
