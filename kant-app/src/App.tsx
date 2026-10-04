import "./App.css";
import { useState } from "react";

import BackToTop from "./components/BackToTop";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
  const [darkToggle, setDarkToggle] = useState(false);
  return (
    <div className={darkToggle ? "dark" : ""}>
      <div
        className="flex flex-col h-auto antialiased App bg-primary dark:bg-secondary"
      >
        <Navigation />
        <section className="w-full mb-16 pt-24 min-h-screen" id="home">
          <Home />
        </section>

        <section className="w-full py-12" id="experience-section">
          <Experience />
        </section>
        <section className="w-full py-12" id="skill-section">
          <Skills />
        </section>
        <section className="w-full py-12" id="project-section">
          <Projects />
        </section>
        <BackToTop />
        <div className="fixed bottom-5 right-2">
          <label className="relative inline-flex items-center mr-5 cursor-pointer">
            <input
              type="checkbox"
              aria-label="Use light theme"
              className="sr-only peer"
              checked={darkToggle}
              onChange={() => setDarkToggle(!darkToggle)}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-2 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-200 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
            <span className="ml-3 text-sm font-medium text-secondarydark dark:text-primarylight">
              {darkToggle ? "Light theme" : "Dark theme"}
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
