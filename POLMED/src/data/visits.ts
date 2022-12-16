import { VisitType } from "@/types/VisitTypes";
import { doctors } from "./doctors";

export const visits: VisitType[] = [
  {
    doctor: doctors[2],
    date: new Date("January 2, 2023 11:30:00").getTime(),
    price: 50,
    reason: "wizyta kontrolna"
  },
  {
    doctor: doctors[3],
    date: new Date("January 10, 2023 9:00:00").getTime(),
    price: 50,
    reason: "wizyta kontrolna"
  }
];
