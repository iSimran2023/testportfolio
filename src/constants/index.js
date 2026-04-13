import {
  service1,
  service2,
  service3,
  service4,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  materialui,
  gmail,
  figma,
  git,
  github,
  linkedin,
  instagram,
  debug,
  JS,
  React,
  gyaanseek,
  customnep,
  hangman,
  typescript,
  nodejs,
  mongodb,
  mysql,
  postgresql,
  docker,
  vscode,
  postman,
} from "../assets";

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "certification",
    title: "Certification",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Responsive Web Design",
    icon: service1,
  },
  {
    title: "Frontend Web Development",
    icon: service2,
  },
  {
    title: "Custom Web Design",
    icon: service3,
  },
  {
    title: "Website Optimization",
    icon: service4,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: materialui,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "VS Code",
    icon: vscode,
  },
  {
    name: "Postman",
    icon: postman,
  },
];

const certification = [
  {
    title: 'JavaScript',
    image: JS,
  },
  {
    title: 'ReactJS',
    image: React,
  }
];

const experiences = [
  {
    title: "Junior Frontend Developer",
    company_name: "DEBUGSOFT Pvt. Ltd.",
    icon: debug,
    iconBg: "#ffffff",
    date: "September 2025 - Present",
    points: [
      "Developed and deployed a public-facing Autism awareness website from concept to production using ReactJS, ensuring accessibility and responsive design.",
      "Engineered core frontend features for the NCRA cooperative platform, supporting a system used by 15,000+ users.",
      "Built and maintained the RHVAP job portal website from scratch using ReactJS, delivering a complete and scalable frontend solution.",
      "Designed and implemented admin dashboard components, integrating RESTful APIs for efficient data management and operations.",
      "Developed reusable UI components to improve code consistency, scalability, and reduce overall development time.",
      "Utilized Git for version control, enabling smooth collaboration and maintaining a clean and organized codebase.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "DEBUGSOFT Pvt. Ltd.",
    icon: debug,
    iconBg: "#ffffff",
    date: "May 2025 - August 2025",
    points: [
      "Contributed to the development and design of HEMIS analytics dashboard using ReactJS and Material-UI.",
      "Assisted in building and designing the campus website with responsive UI components.",
      "Integrated RESTful APIs for dynamic data retrieval and real-time updates across applications.",
      "Utilized Git version control in collaborative development environment, following Agile methodologies.",
      "Collaborated with senior developers to implement user interface features and improve application functionality.",
    ],
  },
];

const socials = [
  {
    image: linkedin,
    link: "https://www.linkedin.com/in/isimran2023/",
  },
  {
    image: github,
    link: "https://github.com/iSimran2023",
  },
  {
    image: instagram,
    link: "https://www.instagram.com/simranpm__/?hl=en",
  },
  {
    image: gmail,
    link: "mailto:simran.mqr111@gmail.com",
  },
];

const projects = [
  {
    name: "GyaanSeek",
    description:
      "A modern educational platform designed for seamless knowledge sharing. It features a responsive dashboard, organized study materials, and an intuitive search system for students and learners.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
    ],
    image: gyaanseek,
    source_code_link: "https://gyaanseek.vercel.app/",
  },
  {
    name: "CustomNep",
    description:
      "A premium e-commerce solution focused on product customization. Users can personalize items like water bottles with a sleek 3D-inspired preview and a smooth checkout experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: customnep,
    source_code_link: "https://ecom-custom-nep.vercel.app/",
  },
  {
    name: "Hangman Game",
    description:
      "A stylish, neon-themed Hangman game that combines classic wordplay with a modern cyberpunk aesthetic. Features interactive animations and a high-tech user interface.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: hangman,
    source_code_link: "https://do-not-let-me-be-a-hangman.vercel.app/",
  },
];

export { services, technologies, certification, socials, experiences, projects };
