// import reactLogo from "./image/react-logo.svg";
import "./App.css";
import React from "react";
import { useState } from "react";

import BackToTop from "./components/BackToTop";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
// import Skills from "./components/Skills";
import CarouselSkills from "./components/CarouselSkills";
import Projects from "./components/Projects";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  function whereIsMyMouse(event: React.MouseEvent): void {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  }

  return (
    <div
      className="flex flex-col h-auto antialiased App bg-primary"
      onMouseMove={whereIsMyMouse}
    >
      <Navigation mousePosition={mousePosition} />
      <section className="w-full mb-10 lg:h-screen" id="home">
        <Home />
      </section>
      {/* <section className="w-full lg:h-content" id="skill-section">
        <Skills />
      </section> */}
      <section className="w-full px-5 h-content" id="skill-section">
        <CarouselSkills />
      </section>
      <section className="w-full h-screen" id="project-section">
        <Projects />
      </section>
      <BackToTop />
    </div>
  );
}

export default App;
