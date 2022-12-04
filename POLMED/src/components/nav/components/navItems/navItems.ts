import houseIcon from "@/img/icons/house-solid.svg";
import doctorIcon from "@/img/icons/user-doctor-solid.svg";
import moneyIcon from "@/img/icons/money-bills-solid.svg";
import phoneIcon from "@/img/icons/phone-solid.svg";
import userIcon from "@/img/icons/user-solid.svg";

export const navItems = [
  {
    content: "Strona główna",
    url: "/",
    icon: houseIcon
  },
  {
    content: "Nasi lekarze",
    url: "/ourDoctors",
    icon: doctorIcon
  },
  {
    content: "Cennik",
    url: "/pricing",
    icon: moneyIcon
  },
  {
    content: "Kontakt",
    url: "/contact",
    icon: phoneIcon
  },
  {
    content: "Moje konto",
    url: "/myAccount",
    icon: userIcon
  }
];

export type NavItemType = {
  content: string;
  url: string;
  icon: string;
};
