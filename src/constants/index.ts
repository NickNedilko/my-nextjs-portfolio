import { RxDashboard, RxHome, RxPerson } from "react-icons/rx";
import { FaGithub, FaLinkedin, FaMobileAlt, FaTelegram } from "react-icons/fa";
export const Socials = [
  {
    name: "Github",
    icon: FaGithub,
    href: "https://github.com/NickNedilko"
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://linkedin.com/in/nikolay-nedilko"
  },
  {
    name: "Mobile",
    icon: FaMobileAlt,
    href: "tel:+380982074227" 
  },
  {
    name: "Telegram",
    icon: FaTelegram,
    href: "https://t.me/NickyNed"
  },
];

export const NavLinks = [
  {
    name: "Home",
    icon: RxHome,
    link: "/",
  },
  {
    name: "About me",
    icon: RxPerson,
    link: "/about-me",
  },
  {
    name: "Projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
];