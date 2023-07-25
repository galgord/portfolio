import {
  backend,
  carrent,
  creator,
  css,
  expo,
  figma,
  git,
  guesty,
  html,
  javascript,
  jira,
  jobit,
  koombea,
  mobile,
  mongodb,
  nodejs,
  pendo,
  reactjs,
  tripguide,
  typescript,
  vue,
  web,
  zustand,
} from '../assets';

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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "NodeJs Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
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
    name: "Expo",
    icon: expo,
  },
  {
    name: "Zustand",
    icon: zustand,
  },
  {
    name: "Vue JS",
    icon: vue,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "jira",
    icon: jira,
  },
];

const experiences = [
  {
    title: "Technical Training Manager | PS | CSM",
    company_name: "Guesty",
    icon: guesty,
    iconBg: "#383E56",
    date: "June 2018 - April 2020",
    points: [
      "Troubleshoot technical problems where they impede the customer’s ability to use the system effectively",
      "Understand the customer business and technical needs to optimize configuration and recommend best practice solutions",
      "Create training materials and processes for future employees.",
      "Develop best practices and Onboarding materials to improve the customer onboarding experience"
    ],
  },
  {
    title: "Software Engineer, Front End",
    company_name: "Pendo",
    icon: pendo,
    iconBg: "#E6DEDD",
    date: "May 2020 - August 2022",
    points: [
      "Developing and maintaining web applications using vue.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Senior React Native Developer",
    company_name: "Koombea",
    icon: koombea,
    iconBg: "#00343C",
    date: "August 2022 - Present",
    points: [
      "Develop Features/Bugfixes/Improvements for Projects following the Mobile Development Process and Best Practices",
      "Support the sales process by delivering requested technical data (Estimates, Product Discovery)",
      "Mentor and support other developers in the team",
      "Participate and support projects according to the Project Management Process",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };