import { DoctorType } from "@/types/DoctorType";
import AnnaKowalskaPhoto from "@/img/doctors/doctor1.jpg";
import MarekGruszkaPhoto from "@/img/doctors/doctor2.jpg";
import AdamNowakPhoto from "@/img/doctors/doctor3.jpg";
import JanKuznikPhoto from "@/img/doctors/doctor4.jpg";

const datesTillJanuary = [
  new Date(2022, 11, 14).getTime(),
  new Date(2022, 11, 13).getTime(),
  new Date(2022, 11, 12).getTime(),
  new Date(2022, 11, 11).getTime(),
  new Date(2022, 11, 10).getTime(),
  new Date(2022, 11, 9).getTime(),
  new Date(2022, 11, 8).getTime(),
  new Date(2022, 11, 15).getTime(),
  new Date(2022, 11, 16).getTime(),
  new Date(2022, 11, 17).getTime(),
  new Date(2022, 11, 18).getTime(),
  new Date(2022, 11, 19).getTime(),
  new Date(2022, 11, 20).getTime(),
  new Date(2022, 11, 21).getTime(),
  new Date(2022, 11, 22).getTime(),
  new Date(2022, 11, 23).getTime(),
  new Date(2022, 11, 24).getTime(),
  new Date(2022, 11, 25).getTime(),
  new Date(2022, 11, 26).getTime(),
  new Date(2022, 11, 27).getTime(),
  new Date(2022, 11, 28).getTime(),
  new Date(2022, 11, 29).getTime(),
  new Date(2022, 11, 30).getTime()
];

export const doctors: DoctorType[] = [
  {
    photo: AnnaKowalskaPhoto,
    name: "lek. med. Anna Kowalska",
    date: "2 sty",
    type: "Pediatra",
    datesTaken: [
      ...datesTillJanuary,
      new Date(2023, 0, 1).getTime(),
      new Date(2023, 0, 6).getTime(),
      new Date(2023, 0, 10).getTime(),
      new Date(2023, 0, 11).getTime(),
      new Date(2023, 0, 21).getTime()
    ],
    hoursTaken: ["9:00", "9:30", "10:00", "12:30", "13:00", "14:00", "14:30"]
  },
  {
    photo: MarekGruszkaPhoto,
    name: "dr Marek Gruszka",
    date: "10 sty",
    type: "Pediatra",
    datesTaken: [
      ...datesTillJanuary,
      new Date(2023, 0, 1).getTime(),
      new Date(2023, 0, 2).getTime(),
      new Date(2023, 0, 3).getTime(),
      new Date(2023, 0, 4).getTime(),
      new Date(2023, 0, 5).getTime(),
      new Date(2023, 0, 6).getTime(),
      new Date(2023, 0, 7).getTime(),
      new Date(2023, 0, 8).getTime(),
      new Date(2023, 0, 9).getTime(),
      new Date(2023, 0, 13).getTime(),
      new Date(2023, 0, 15).getTime(),
      new Date(2023, 0, 16).getTime(),
      new Date(2023, 0, 21).getTime()
    ],
    hoursTaken: ["7:00", "7:30", "8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30"]
  },
  {
    photo: AdamNowakPhoto,
    name: "dr n. med. Adam Nowak",
    date: "2 sty",
    type: "Lekarz rodzinny",
    datesTaken: [
      ...datesTillJanuary,
      new Date(2023, 0, 1).getTime(),
      new Date(2023, 0, 5).getTime(),
      new Date(2023, 0, 8).getTime()
    ],
    hoursTaken: ["8:00", "9:30", "10:30", "12:00", "13:30", "14:00"]
  },
  {
    photo: JanKuznikPhoto,
    name: "lek. Jan Kuźnik",
    date: "2 sty",
    type: "Lekarz rodzinny",
    datesTaken: [...datesTillJanuary],
    hoursTaken: ["7:30", "11:00", "13:00", "13:30", "14:00", "14:30"]
  }
];
