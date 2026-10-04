import React from "react";

import myImage from "../assets/image/my-img.webp";

const Home: React.FC = () => {
  return (
    <main className="flex flex-col gap-10 max-w-6xl mx-auto px-5">
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-8">
        <h1 className="font-bold text-secondary text-3xl sm:text-5xl lg:text-7xl dark:text-primary">
          I'm a{" "}
          <span className="text-teal-200 dark:text-teal-800 lg:block">
            Full Stack Developer
          </span>
        </h1>
        <img
          className="w-40 sm:w-56 rounded-full"
          src={myImage}
          alt="Suwatcharin Issariyakasem"
          width="224" height="224"
        />
      </div>

      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-8 h-full w-full">
        <div className="flex flex-col items-start gap-6 text-lg text-secondary dark:text-primary">
          <h2 className="font-semibold tracking-widest font-cinzel sx:mt-3 md:mt-5 sm:mt-3">
            Hello, I'm{" "}
            <span className="text-[#FFEFBA] dark:text-teal-800">
              Suwatcharin Issariyakasem.
            </span>
          </h2>
          <p className="sx:mt-3">
            I enjoy coding like playing games. Both offer
            challenges and achievements at each step.
          </p>
          <a
            href="https://res.cloudinary.com/dimnvx4vy/image/upload/v1666897640/Suwatcharin_Resume.pdf"
            className="inline-block px-8 py-3 border-2 border-current rounded-full focus-visible:ring-2"
          >
            Download CV
          </a>
        </div>
      </div>
    </main>
  );
};
export default Home;
