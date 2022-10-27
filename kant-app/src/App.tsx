// import reactLogo from "./image/react-logo.svg";
import "./App.css";
import React from "react";
import { useState } from "react";

import BackToTop from "./components/BackToTop";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Skills from "./components/Skills";

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
      className="flex flex-col antialiased App bg-primary"
      onMouseMove={whereIsMyMouse}
    >
      <Navigation mousePosition={mousePosition} />
      <section className="w-full lg:h-screen">
        <Home />
      </section>
      <section className="w-full lg:h-content">
        <Skills />
        <BackToTop />
      </section>
    </div>
  );
}

export default App;

/* <img src={reactLogo} className="react-logo" alt="logo" /> */
