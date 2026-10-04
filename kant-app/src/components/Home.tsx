import React from "react";

import myImage from "../assets/image/my-img.png";

const Home: React.FC = () => {
  return (
    <main className="flex flex-col items-center h-full pt-24 justify-evenly sx:pt-16">
      <div className="flex flex-row items-center justify-between px-[5%]">
        <h1 className="font-bold text-secondary md:text-6xl lg:text-8xl sm:text-3xl sx:text-2xl dark:text-primary">
          I'm a{" "}
          <span className="text-teal-200 dark:text-teal-800 animate-pulse lg:block">
            Full Stack Developer
          </span>
        </h1>
        <img
          className="w-1/5 rounded-full min-w-[150px] opacity-90 md:w-1/3"
          src={myImage}
          alt="profileImage"
        />
      </div>

      <div className="flex flex-row items-center justify-between px-[5%] h-full w-full">
        <div className="flex flex-col items-start text-lg text-secondary dark:text-primary h-3/4 lg:text-2xl sx:text-base justify-evenly">
          <h1 className="font-semibold tracking-widest font-cinzel sx:mt-3 md:mt-5 sm:mt-3">
            Hello, I'm{" "}
            <span className="text-[#FFEFBA] dark:text-teal-800">
              Suwatcharin Issariyakasem.
            </span>
          </h1>
          <p className="sx:mt-3">
            I have passion in coding like I'm playing games. Both have
            challenges and achievements at each step.
          </p>
          <a
            href="https://res.cloudinary.com/dimnvx4vy/image/upload/v1666897640/Suwatcharin_Resume.pdf"
            download
          >
            <button className="inline-block w-56 py-3 text-lg leading-tight transition duration-150 ease-in-out border-2 rounded-full dark:text-primary dark:border-primary hover:bg-primarylight hover:bg-opacity-5 focus:outline-none focus:ring-2 md:w-48 md:p-3 md:mt-5 sx:py-2 sx:w-36 sx:mt-3 sm:p-1 sm:w-36 sm:mt-3 border-secondary text-secondary sx:text-base">
              Download CV
            </button>
          </a>
        </div>
        <div hidden>test</div>
      </div>
    </main>
  );
};
export default Home;
