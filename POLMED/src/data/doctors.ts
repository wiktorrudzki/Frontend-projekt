import { DoctorType } from "@/types/doctor";
import AnnaKowalskaPhoto from "@/img/doctors/doctor1.jpg";
import MarekGruszkaPhoto from "@/img/doctors/doctor2.jpg";
import AdamNowakPhoto from "@/img/doctors/doctor3.jpg";
import JanKuznikPhoto from "@/img/doctors/doctor4.jpg";

export const doctors: DoctorType[] = [
  {
    photo: AnnaKowalskaPhoto,
    name: "lek. med. Anna Kowalska",
    date: "15 lis",
    type: "Pediatra"
  },
  {
    photo: MarekGruszkaPhoto,
    name: "dr Marek Gruszka",
    date: "10 gru",
    type: "Pediatra"
  },
  {
    photo: AdamNowakPhoto,
    name: "dr n. med. Adam Nowak",
    date: "15 lis",
    type: "Lekarz rodzinny"
  },
  {
    photo: JanKuznikPhoto,
    name: "lek. Jan Kuźnik",
    date: "10 lis",
    type: "Lekarz rodzinny"
  }
];
