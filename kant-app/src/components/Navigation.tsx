import React from "react";
import EyesAndIris from "./Eyes";
import ProgressBar from "./ProgressBar";

const Navigation: React.FC = () => (
  <nav aria-label="Main navigation" className="fixed z-10 w-full bg-primary/95 dark:bg-secondary/95 text-secondary dark:text-primary">
    <ProgressBar />
    <div className="flex items-center justify-between gap-3 px-5 py-5 max-w-6xl mx-auto">
      <a href="#home" className="flex items-center gap-3"><EyesAndIris /><span className="hidden sm:inline font-silk">Suwatcharin</span></a>
      <div className="flex gap-5 sm:gap-8">
        <a href="#home">Home</a><a href="#skill-section">Skills</a><a href="#project-section">Projects</a>
      </div>
    </div>
  </nav>
);
export default Navigation;
