import React from "react";

import myImage from "../assets/image/my-img.png";

const Home: React.FC = () => {
  return (
    <>
      <main
        className="flex flex-row items-center justify-between px-10 pt-20 lg:pt-32 lg:px-24"
        id="home"
      >
        <h1 className="font-bold text-white md:text-6xl lg:text-8xl sm:text-3xl sx:text-2xl">
          I'm a{" "}
          <span className="text-teal-200 animate-pulse lg:block">
            Full Stack Developer
          </span>
        </h1>
        <img
          className="w-1/5 rounded-full min-w-[150px] opacity-90 md:w-1/3"
          src={myImage}
          alt="profileImage"
        />
      </main>
      <div className="text-lg text-white lg:m-24 lg:w-[60%] sm:m-10 md:m-20 lg:text-2xl sx:text-base sx:px-2">
        <h1 className="mt-2 font-semibold tracking-widest font-cinzel">
          Hello, I'm{" "}
          <span className="text-secondarydark">Suwatcharin Issariyakasem.</span>
        </h1>
        <p className="mt-2 mb-8">
          I have passion in coding like I'm playing games. Both have challenges
          and achievements at each step.
        </p>
        <a href="https://www.google.com" className="px-8 py-2 border rounded">
          Download CV
        </a>
      </div>
    </>
  );
};
export default Home;
