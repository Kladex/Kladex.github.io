import react from "../assets/image/react-logo.svg";
import expressjs from "../assets/image/expressjs.png";
import css from "../assets/image/css-3.png";
import git from "../assets/image/Git.png";
import html from "../assets/image/html.png";
import js from "../assets/image/js.png";
import mongodb from "../assets/image/MongoDB.png";
import nodejs from "../assets/image/nodejs.png";
import typescript from "../assets/image/Typescript_logo_2020.png";
import postgresql from "../assets/image/PostgreSQL.png";
import chakra from "../assets/image/chakra.svg";
import cypress from "../assets/image/cypress.png";
import tailwind from "../assets/image/tailwind.svg";
import redux from "../assets/image/redux.svg";
import jest from "../assets/image/jest.png";
import nextjs from "../assets/image/nextjs.png";
import postman from "../assets/image/postman.png";

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
