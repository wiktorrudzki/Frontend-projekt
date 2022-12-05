export const navItems = [
  {
    content: "Strona główna",
    url: "/",
    icon: "nav-item-home-icon"
  },
  {
    content: "Nasi lekarze",
    url: "/ourDoctors",
    icon: "nav-item-doctor-icon"
  },
  {
    content: "Cennik",
    url: "/pricing",
    icon: "nav-item-money-icon"
  },
  {
    content: "Kontakt",
    url: "/contact",
    icon: "nav-item-phone-icon"
  },
  {
    content: "Moje konto",
    url: "/myAccount",
    icon: "nav-item-user-icon"
  }
];

export type NavItemType = {
  content: string;
  url: string;
  icon: string;
};
