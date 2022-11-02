import React from "react";

import weatherApp from "../assets/image/weather-app.png";
import getThatJob from "../assets/image/get-that-job.png";

const Projects: React.FC = () => {
  return (
    <>
      <div className="flex flex-col px-[5%] mt-10 text-secondary justify-center w-full font-silk">
        <h1 className="text-5xl font-bold sx:text-2xl">Projects</h1>
        <div className="flex flex-row justify-between w-full space-x-16 mt-14">
          <div className="flex flex-col group">
            <img
              src={weatherApp}
              alt="weather-app"
              className="ease-in-out rounded-xl bg-secondary group-hover:scale-110 group-hover:duration-100"
            />
            <a
              href="https://weather-app-kladex.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl ease-in-out group-hover:duration-100 text-secondary group-hover:translate-y-6 group-hover:-translate-x-8"
            >
              Weather app
            </a>
          </div>
          <div className="flex flex-col group">
            <img
              src={getThatJob}
              alt="weather-app"
              className="ease-in-out bg-secondary group-hover:duration-100 group-hover:scale-110 rounded-xl"
            />
            <div className="text-xl ease-in-out group-hover:duration-100 text-secondary group-hover:translate-y-6 group-hover:-translate-x-8">
              Get that job (Job application web app)
            </div>
          </div>
        </div>
        <h1 className="mt-20 text-5xl font-bold sx:text-2xl">
          Under Construction . . .
        </h1>
      </div>
    </>
  );
};

export default Projects;
