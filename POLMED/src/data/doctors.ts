import { DoctorType } from "@/types/DoctorType";
import AnnaKowalskaPhoto from "@/img/doctors/doctor1.jpg";
import MarekGruszkaPhoto from "@/img/doctors/doctor2.jpg";
import AdamNowakPhoto from "@/img/doctors/doctor3.jpg";
import JanKuznikPhoto from "@/img/doctors/doctor4.jpg";

const datesTillJanuary = [
  new Date(2022, 12, 14).getTime(),
  new Date(2022, 12, 13).getTime(),
  new Date(2022, 12, 12).getTime(),
  new Date(2022, 12, 11).getTime(),
  new Date(2022, 12, 10).getTime(),
  new Date(2022, 12, 9).getTime(),
  new Date(2022, 12, 8).getTime(),
  new Date(2022, 12, 15).getTime(),
  new Date(2022, 12, 16).getTime(),
  new Date(2022, 12, 17).getTime(),
  new Date(2022, 12, 18).getTime(),
  new Date(2022, 12, 19).getTime(),
  new Date(2022, 12, 20).getTime(),
  new Date(2022, 12, 21).getTime(),
  new Date(2022, 12, 22).getTime(),
  new Date(2022, 12, 23).getTime(),
  new Date(2022, 12, 24).getTime(),
  new Date(2022, 12, 25).getTime(),
  new Date(2022, 12, 27).getTime(),
  new Date(2022, 12, 28).getTime(),
  new Date(2022, 12, 29).getTime(),
  new Date(2022, 12, 30).getTime()
];

export const doctors: DoctorType[] = [
  {
    photo: AnnaKowalskaPhoto,
    name: "lek. med. Anna Kowalska",
    date: "3 sty",
    type: "Pediatra",
    dates: [
      ...datesTillJanuary,
      new Date(2023, 1, 1).getTime(),
      new Date(2023, 1, 6).getTime(),
      new Date(2023, 1, 10).getTime(),
      new Date(2023, 1, 11).getTime(),
      new Date(2023, 1, 21).getTime()
    ]
  },
  {
    photo: MarekGruszkaPhoto,
    name: "dr Marek Gruszka",
    date: "10 sty",
    type: "Pediatra",
    dates: [
      ...datesTillJanuary,
      new Date(2023, 1, 1).getTime(),
      new Date(2023, 1, 2).getTime(),
      new Date(2023, 1, 3).getTime(),
      new Date(2023, 1, 4).getTime(),
      new Date(2023, 1, 6).getTime(),
      new Date(2023, 1, 7).getTime(),
      new Date(2023, 1, 8).getTime(),
      new Date(2023, 1, 9).getTime(),
      new Date(2023, 1, 13).getTime(),
      new Date(2023, 1, 15).getTime(),
      new Date(2023, 1, 16).getTime(),
      new Date(2023, 1, 21).getTime()
    ]
  },
  {
    photo: AdamNowakPhoto,
    name: "dr n. med. Adam Nowak",
    date: "2 sty",
    type: "Lekarz rodzinny",
    dates: [
      ...datesTillJanuary,
      new Date(2023, 1, 1).getTime(),
      new Date(2023, 1, 5).getTime(),
      new Date(2023, 1, 8).getTime()
    ]
  },
  {
    photo: JanKuznikPhoto,
    name: "lek. Jan Kuźnik",
    date: "10 lis",
    type: "Lekarz rodzinny",
    dates: [...datesTillJanuary]
  }
];
