export const navItems = [
  {
    content: "Strona główna",
    url: "/"
  },
  {
    content: "Nasi lekarze",
    url: "/ourDoctors"
  },
  {
    content: "Cennik",
    url: "/pricing"
  },
  {
    content: "Kontakt",
    url: "/contact"
  },
  {
    content: "Moje konto",
    url: "/myAccount"
  }
];

export type NavItemType = {
  content: string;
  url: string;
};
