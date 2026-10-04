import React from "react";

import weatherApp from "../assets/image/weather-app.webp";
import getThatJob from "../assets/image/get-that-job.webp";

const Projects: React.FC = () => {
  return (
    <>
      <div className="flex flex-col px-5 max-w-6xl mx-auto text-secondary justify-center w-full font-silk dark:text-primary">
        <h2 className="text-3xl sm:text-5xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="flex flex-col group sx:mb-5">
            <img
              src={weatherApp}
              alt="Weather app preview"
              loading="lazy"
              className="ease-in-out rounded-xl bg-secondary group-hover:scale-110 group-hover:duration-100 min-w-[150px]"
            />
            <a
              href="https://weather-app-kladex.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl ease-in-out group-hover:duration-100 group-hover:translate-y-6 group-hover:-translate-x-8 sx:group-hover:translate-y-2 sx:group-hover:-translate-x-2"
            >
              Weather app
            </a>
          </div>
          <div className="flex flex-col group">
            <img
              src={getThatJob}
              alt="Get that job application preview"
              loading="lazy"
              className="ease-in-out bg-secondary group-hover:duration-100 group-hover:scale-110 rounded-xl min-w-[150px] "
            />
            <div className="text-xl ease-in-out group-hover:duration-100 group-hover:translate-y-6 group-hover:-translate-x-8 sx:group-hover:translate-y-2 sx:group-hover:-translate-x-2">
              Get that job (Job application web app)
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Projects;
