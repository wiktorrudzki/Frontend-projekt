import { VisitType } from "@/types/VisitTypes";
import { doctors } from "./doctors";

export const visits: VisitType[] = [
  {
    doctor: doctors[2],
    date: new Date(2023, 1, 2).getTime(),
    price: 50,
    reason: "wizyta kontrolna"
  },
  {
    doctor: doctors[3],
    date: new Date(2023, 1, 10).getTime(),
    price: 50,
    reason: "wizyta kontrolna"
  }
];
