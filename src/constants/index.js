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
  typescript,
  nodejs,
  mongodb,
  mysql,
  postgresql,
  docker,
  vscode,
  postman,
  angular,
  redux,
  express,
  prisma,
  swagger,
  linux,
  nginx,
  githubdev,
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
    title: "Frontend Development",
    icon: service1,
  },
  {
    title: "Backend & REST APIs",
    icon: service2,
  },
  {
    title: "Fintech & Cooperative Systems",
    icon: service3,
  },
  {
    title: "Deployment & Production Support",
    icon: service4,
  },
];

const technologies = [
  {
    category: "Frontend",
    items: [
      { name: "HTML 5", icon: html },
      { name: "CSS 3", icon: css },
      { name: "JavaScript", icon: javascript },
      { name: "TypeScript", icon: typescript },
      { name: "React JS", icon: reactjs },
      { name: "Angular", icon: angular },
      { name: "Redux Toolkit", icon: redux },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "Material UI", icon: materialui },
    ],
  },
  {
    category: "Backend & Databases",
    items: [
      { name: "Node JS", icon: nodejs },
      { name: "Express JS", icon: express },
      { name: "Prisma", icon: prisma },
      { name: "Swagger", icon: swagger },
      { name: "PostgreSQL", icon: postgresql },
      { name: "MySQL", icon: mysql },
      { name: "MongoDB", icon: mongodb },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: git },
      { name: "GitHub", icon: githubdev },
      { name: "Docker", icon: docker },
      { name: "Postman", icon: postman },
      { name: "Linux", icon: linux },
      { name: "Nginx", icon: nginx },
      { name: "VS Code", icon: vscode },
      { name: "Figma", icon: figma },
    ],
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
    title: "Frontend Developer",
    company_name: "DEBUGSOFT Pvt. Ltd.",
    icon: debug,
    iconBg: "#ffffff",
    date: "September 2025 - Present",
    points: [
      "Built and maintain the shared Node.js / Express / TypeScript and PostgreSQL backend powering LCMS, FMIS and the Claim Registration Portal, plus the complete backend of the Cooperative Complaint Management System.",
      "Integrated NCHL (ConnectIPS) bank payments for cooperative settlement and disbursement, with maker/checker approval, SMS OTP login for settlement staff and automated status reconciliation.",
      "Secured production systems with server-side role and permission checks, rate limiting, locked file uploads, server-side page-size caps and audit logs.",
      "Built the Angular frontend of the GroFiniX cooperative core banking system, and frontend modules for NCRA, RHVAP, HEMIS, UGC and TU platforms: 8+ live government and institutional systems in total.",
      "Deploy and troubleshoot production applications on Linux and Nginx, and work directly with cooperative offices to turn their requirements into features.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "DEBUGSOFT Pvt. Ltd.",
    icon: debug,
    iconBg: "#ffffff",
    date: "May 2025 - August 2025",
    points: [
      "Built the HEMIS analytics dashboard with React.js and Material UI.",
      "Built responsive UI components for campus websites and integrated REST APIs for dynamic data.",
      "Worked with senior developers using Git and Agile practices.",
    ],
  },
];

// Outline icon paths (24x24 viewBox) drawn with an animated stroke in Social.jsx
const socials = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/isimran2023/",
    paths: [
      "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z",
      "M2 9h4v12H2z",
      "M2 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0",
    ],
  },
  {
    name: "GitHub",
    link: "https://github.com/iSimran2023",
    paths: [
      "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      "M9 18c-4.51 2-5-2-7-2",
    ],
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/simranpm__/?hl=en",
    paths: [
      "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z",
      "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
      "M17.5 6.5h.01",
    ],
  },
  {
    name: "Email",
    link: "mailto:simran.mqr111@gmail.com",
    paths: [
      "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
      "M22 6l-10 7L2 6",
    ],
  },
];

const projects = [
  {
    name: "GroFiniX",
    subtitle: "Cooperative Core Banking System",
    role: "Frontend",
    description:
      "Angular frontend for a cooperative core banking system built on Apache Fineract: member management (KYM, nominees, documents), loan products, a dynamic cooperative loan application, quick deposit/withdraw, a public loan calculator and a loan aging report with charts and PDF/CSV export.",
    stack: [{ name: "Angular", icon: angular }, { name: "TypeScript", icon: typescript }, { name: "Material UI", icon: materialui }, { name: "Tailwind CSS", icon: tailwind }],
    live_link: "",
  },
  {
    name: "LCMS",
    subtitle: "Loan Calculation Management System",
    role: "Full-stack",
    description:
      "Loan, savings and settlement platform for cooperatives. Built the frontend, backend and database: exact-decimal interest calculation, fines and waivers, backdated settlement recalculation, maker/checker claim review and per-cooperative permissions.",
    stack: [{ name: "React", icon: reactjs }, { name: "Material UI", icon: materialui }, { name: "Node.js", icon: nodejs }, { name: "Express", icon: express }, { name: "TypeScript", icon: typescript }, { name: "PostgreSQL", icon: postgresql }],
    live_link: "https://lcms.coopmc.gov.np/",
  },
  {
    name: "FMIS",
    subtitle: "Financial Management Information System",
    role: "Full-stack",
    description:
      "Settlement and disbursement system with NCHL (ConnectIPS) bank payments, maker/checker disbursement desks, a retained-savings ledger, audit logs and server-paginated financial reports with Excel exports.",
    stack: [{ name: "React", icon: reactjs }, { name: "Material UI", icon: materialui }, { name: "Node.js", icon: nodejs }, { name: "Express", icon: express }, { name: "PostgreSQL", icon: postgresql }],
    live_link: "https://fmis.coopmc.gov.np/",
  },
  {
    name: "Claim Registration Portal",
    subtitle: "Savings Claim Portal",
    role: "Full-stack",
    description:
      "Portal for depositors to claim savings from cooperatives: responsive claim wizard, mobile + code login, disbursement status check, and fraud prevention through citizenship and phone duplicate checks.",
    stack: [{ name: "React", icon: reactjs }, { name: "Tailwind CSS", icon: tailwind }, { name: "Node.js", icon: nodejs }, { name: "Express", icon: express }, { name: "PostgreSQL", icon: postgresql }],
    live_link: "https://claim.coopmc.gov.np/",
  },
  {
    name: "Complaint Management",
    subtitle: "Cooperative Complaint Management System",
    role: "Backend",
    description:
      "Complaint registration system for Bagmati Province. Built the Express + Prisma API from scratch with JWT roles, complaint-type endpoints, document uploads, feedback tracking and Swagger docs.",
    stack: [{ name: "Node.js", icon: nodejs }, { name: "Express", icon: express }, { name: "Prisma", icon: prisma }, { name: "Swagger", icon: swagger }],
    live_link: "https://complaincor.bagamati.gov.np/",
  },
  {
    name: "RHVAP Vacancy Portal",
    subtitle: "Job Vacancy Portal",
    role: "Frontend",
    description:
      "Job vacancy and application portal for MoALD with OTP login, multi-step applications, Super Admin / PMO / PCO dashboards, email/SMS notices, Excel export and PDF admit cards.",
    stack: [{ name: "React", icon: reactjs }, { name: "Material UI", icon: materialui }, { name: "Tailwind CSS", icon: tailwind }],
    live_link: "https://rhvapvacancy.moald.gov.np/",
  },
  {
    name: "NCRA FCRS",
    subtitle: "Financial Cooperative Registration System",
    role: "Frontend",
    description:
      "National cooperative registration platform: multi-step registration, real-time batch status via Server-Sent Events, and searchable, paginated reports.",
    stack: [{ name: "React", icon: reactjs }, { name: "TypeScript", icon: typescript }, { name: "Tailwind CSS", icon: tailwind }],
    live_link: "https://fcrs.ncra.gov.np/",
  },
  {
    name: "Nepal Autism Website",
    subtitle: "Autism Awareness Website with CMS",
    role: "Frontend",
    description:
      "Public website for an autism awareness organisation with news, activities, team and publication pages, plus an admin CMS with a rich-text editor for managing content.",
    stack: [{ name: "React", icon: reactjs }, { name: "Redux", icon: redux }, { name: "Material UI", icon: materialui }, { name: "Tailwind CSS", icon: tailwind }],
    live_link: "https://nepalautism.org/",
  },
  {
    name: "Campus Websites",
    subtitle: "College Websites with Admin Panel",
    role: "Full-stack",
    description:
      "Content-managed college websites with notices, teams and publications, an admin panel with image uploads, and content that expires automatically by Nepali date.",
    stack: [{ name: "React", icon: reactjs }, { name: "Redux", icon: redux }, { name: "Material UI", icon: materialui }, { name: "Node.js", icon: nodejs }, { name: "Express", icon: express }, { name: "MySQL", icon: mysql }],
    live_link: "",
  },
];

export { services, technologies, certification, socials, experiences, projects };
