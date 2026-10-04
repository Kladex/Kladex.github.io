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
  const [darkToggle, setDarkToggle] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  function whereIsMyMouse(event: React.MouseEvent): void {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  }

  return (
    <div className={`${darkToggle && "dark"}`}>
      <div
        className="flex flex-col h-auto antialiased App bg-primary dark:bg-secondary"
        onMouseMove={whereIsMyMouse}
      >
        <Navigation
          mousePosition={mousePosition}
          setDarkToggle={setDarkToggle}
          darkToggle={darkToggle}
        />

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
        <div className="fixed bottom-5 right-2">
          <label className="relative inline-flex items-center mr-5 cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={darkToggle}
              onChange={() => setDarkToggle(!darkToggle)}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-3 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-200 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
            <span className="ml-3 text-sm font-medium text-secondarydark dark:text-primarylight">
              {!darkToggle ? "Light" : "Dark"}
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
