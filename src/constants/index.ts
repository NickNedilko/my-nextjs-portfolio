import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxAccessibility,
  RxHome,
  RxPerson,
  RxDashboard,
} from "react-icons/rx";
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

export const ServiceData = [
  {
    icon: RxReader,
    title: "Seo",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: "/assets/space/SpaceCity7.jpeg",
  },
  {
    icon: RxCrop,
    title: "Development",
    content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: "/assets/space/SpaceCity9.jpeg",
  },
  {
    icon: RxPencil2,
    title: "Branding",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: "/assets/space/SpaceCity1.jpg",
  },
  {
    icon: RxDesktop,
    title: "Design",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: "/assets/space/SpaceCity6.jpeg",
  },
  {
    icon: RxAccessibility,
    title: "Management",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: "/assets/space/SpaceCity5.jpeg",
  },
  {
    icon: RxRocket,
    title: "Production",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: "/assets/space/SpaceCity8.jpeg",
  },
];

export const TechData = [
  {
    title: 'React',
    icon: '/assets/icons/react.svg'},
  {
    title: 'Next.js',
    icon: '/assets/icons/nextjs.png',},
  {
    title: 'Typescript',
    icon: '/assets/icons/typescript.svg',},   
  {
    title: 'Tailwind',          
    icon: '/assets/icons/tailwind.svg',
  }, 
  {
    title: 'Git',
    icon: '/assets/icons/git.svg',
  },
  {
    title: 'Github',
    icon: '/assets/icons/github.svg',
  },
  {
    title: 'Node.js',
    icon: '/assets/icons/nodejs.png',
  },
  {
    title: 'MongoDB',
    icon: '/assets/icons/mongodb.svg',
  },
  {
    title: 'zustand',
    icon: '/assets/icons/zustand.svg',
  },
  {
    title: 'PostgreSQL',
    icon: '/assets/icons/postgresql.svg',
  },
  {
    title: 'Docker',
    icon: '/assets/icons/docker.svg',
  },
  {
    title: 'Postman',
    icon: '/assets/icons/postman.svg',
  },
  {
    title: 'Prisma',
    icon: '/assets/icons/prisma.png',
  },
  {
    title: 'TanStack Query',
    icon: '/assets/icons/tanStack.png',
  },
  {
    title: 'Redux Toolkit',
    icon: '/assets/icons/redux.png',
  },
  
]