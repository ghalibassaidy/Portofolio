import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  postgresql,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  elearning,
  tms,
  cp,
  threejs,
  spp,
  beImage,
  FsImage,
  WbImage 
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Django Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Laravel Developer",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Laravel Developer",
    company_name: "SMK Mardhika",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Augustus 2022 - January 2023",
    points: [
      "Developing web E-Learning using Laravel and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "LServed as a key member of the SMK Mardhika team, contributing as a Web Developer focused on financial solutions.",
      "Managed Learning Management System(LMS) to supported website platform.",
    ],
  },
  {
    title: "Laravel Developer",
    company_name: "EvaFuture",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "January 2024 - February 2024",
    points: [
      "Developing and maintaining web applications using Laravel and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Completed projects in retail, healthcare, and logistics, delivering custom solutions for websites and information systems that drive growth.",
      "Each project uses the latest technology and best practices to ensure optimal performance and scalability.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "PT Bakrie Renewable Chemicals",
    icon: shopify,
    iconBg: "#383E56",
    date: "December 2024 - April 2025",
    points: [
      "Built a full Training Management System (TMS) web app from scratch to meet complex enterprise-level requirements.",
      "Back end: Django (Python) designed scalable architecture & relational database schema.",
      "Developed automated email notification system real-time alerts and reminders.",
      "Handled complex user requests and stakeholder feedback with scalable and maintainable codebase.",
      "Result: Streamlined internal training workflows, boosted engagement, and reduced manual overhead significantly.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "E-Commerce",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "March 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const skillsShowcase = [
  {
    skillset:
      "Rick built a full-scale Training Management System for us from scratch using Django. What impressed us most was not just the tech, but how seamlessly it matched our real-world workflows. It literally replaced spreadsheets and chaos with clarity.",
    name: "Backend Development",
    designation: "BE",
    company: "Bakrie Renewable Chemicals",
    image: beImage,
  },
  {
    skillset:
      "We needed a custom website for our logistics project — and Rick delivered a fast, scalable solution that actually moved the needle. Clients started noticing. So did Google.",
    name: "Fullstack Freelance Projects",
    designation: "Fullstack",
    company: "EvaFuture",
    image: FsImage,
  },
  {
    skillset:
      "Our LMS was clunky until Rick stepped in. He modernized the whole thing, improved the UX, and even got us a 9/10 satisfaction rating from users. Students and teachers are finally happy — which says a lot.",
    name: "LMS & Education Tech",
    designation: "Web Dev",
    company: "SMK Mardhika",
    image: WbImage,
  },
];



const projects = [
  {
    name: "E-Learning",
    description:
      "As a freelance Web Developer, played a key role in managing the Learning Management System (LMS) for the SMK Mardhika platform—delivering financial solution features and achieving a user satisfaction rate of 9/10 through a seamless, high-performing web experience.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: elearning,
    source_code_link: "https://github.com/ghalibassaidy",
  },
  {
    name: "Training Management System",
    description:
      "Built a full-scale Training Management System (TMS) web app from scratch using Django with a scalable architecture, relational database schema, automated email notifications, and robust handling of user/stakeholder requests—resulting in streamlined training workflows, increased engagement, and significantly reduced manual overhead.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "blue-text-gradient",
      },
    ],
    image: tms,
    source_code_link: "https://github.com/ghalibassaidy",
  },
  {
    name: "Company Profile",
    description:
      "As a freelance Web Developer from Yemen, successfully delivered custom website and information system solutions across retail, healthcare, and logistics sectors using the latest technologies and best practices to ensure performance, scalability, and business growth.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: cp,
    source_code_link: "https://github.com/ghalibassaidy",
  },
  {
    name: "School Payment Portal",
    description:
      "I developed a School Payment Portal using PHP Native and MySQL with a Bootstrap front end. This platform allows students and parents to easily track and pay school fees online, reducing administrative work. Key features include automated payment reminders, secure online payments, and an admin dashboard for managing student accounts and generating reports. The portal streamlines payment processes and improves communication between schools, students, and parents.",
    tags: [
      {
        name: "PHP native",
        color: "blue-text-gradient",
      },
      {
        name: "MYSQL",
        color: "orange-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: spp,
    source_code_link: "https://github.com/ghalibassaidy",
  },
];

export { services, technologies, experiences, skillsShowcase , projects };
