import react from "../assets/image/react-logo.svg";
import expressjs from "../assets/image/expressjs.webp";
import css from "../assets/image/css-3.webp";
import git from "../assets/image/Git.webp";
import html from "../assets/image/html.webp";
import js from "../assets/image/js.webp";
import mongodb from "../assets/image/MongoDB.webp";
import nodejs from "../assets/image/nodejs.webp";
import typescript from "../assets/image/Typescript_logo_2020.webp";
import postgresql from "../assets/image/PostgreSQL.webp";
import chakra from "../assets/image/chakra.svg";
import cypress from "../assets/image/cypress.webp";
import tailwind from "../assets/image/tailwind.svg";
import redux from "../assets/image/redux.svg";
import jest from "../assets/image/jest.webp";
import nextjs from "../assets/image/nextjs.webp";
import postman from "../assets/image/postman.webp";

const skills = [
  {
    id: 1,
    title: "Front-End",
    content: [
      { id: 1, title: "HTML", image: html },
      { id: 2, title: "CSS", image: css },
      { id: 3, title: "React", image: react },
      { id: 4, title: "Tailwinds", image: tailwind },
      { id: 5, title: "Chakra UI", image: chakra },
      { id: 6, title: "Redux", image: redux },
    ],
  },
  {
    id: 2,
    title: "Back-End",
    content: [
      { id: 1, title: "NodeJS", image: nodejs },
      { id: 2, title: "Express", image: expressjs },
      { id: 3, title: "PostgreSQL", image: postgresql },
      { id: 4, title: "MongoDB", image: mongodb },
      { id: 5, title: "Postman", image: postman },
    ],
  },
  {
    id: 3,
    title: "Others",
    content: [
      { id: 1, title: "Git", image: git },
      { id: 2, title: "Jest", image: jest },
      { id: 3, title: "Cypress", image: cypress },
      { id: 4, title: "JavaScript", image: js },
      { id: 5, title: "TypeScript", image: typescript },
      { id: 6, title: "NextJS", image: nextjs },
    ],
  },
];

export default skills;
