export type DoctorType = {
  photo: string;
  name: string;
  date: string;
  type: "Pediatra" | "Lekarz rodzinny";
  datesTaken: number[];
  hoursTaken: string[];
};
