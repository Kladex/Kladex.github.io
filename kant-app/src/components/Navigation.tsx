import React from "react";

import EyesAndIris from "./Eyes";
import { EyesPosition } from "../types/types";
import ProgressBar from "./ProgressBar";

const Navigation: React.FC<{ mousePosition: EyesPosition }> = ({
  mousePosition,
}) => {
  let { x, y } = mousePosition;

  return (
    <nav className="fixed z-10 flex flex-col w-full">
      <ProgressBar />
      <div className="flex flex-row justify-between items-center p-10 text-secondary h-[12vh] font-silk  bg-primary/75 w-full sm:p-10 sx:px-5">
        <div className="flex flex-row items-center lg:w-1/3 md:w-2/3 ">
          <EyesAndIris x={x} y={y} />
          <h1 className="pl-5 text-xl tracking-wide text-center first-letter:text-4xl">
            <span className="lg:text-2xl md:text-xl text-secondarydark sx:hidden">
              Suwatcharin
            </span>{" "}
            <span className="sm:hidden sx:hidden">keeps an eye on you</span>
          </h1>
        </div>

        <div className="flex flex-row h-16 lg:w-1/4 md:w-2/4 sm:w-2/4 lg:text-lg justify-evenly sm:text-xs sx:w-3/4">
          <a
            href="#home"
            className="flex items-center justify-center w-1/3 bg-transparent rounded-lg hover:shadow-pink-50/75 hover:shadow-newInner hover:scale-110"
          >
            <button>Home</button>
          </a>

          <a
            href="#skill-section"
            className="flex items-center justify-center w-1/3 bg-transparent rounded-lg hover:shadow-pink-50/75 hover:shadow-newInner hover:scale-110"
          >
            <button>Skills</button>
          </a>

          <a
            href="#project-section"
            className="flex items-center justify-center w-1/3 bg-transparent rounded-lg hover:shadow-pink-50/75 hover:shadow-newInner hover:scale-110"
          >
            <button>Projects</button>
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
