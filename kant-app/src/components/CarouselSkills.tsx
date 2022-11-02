import React from "react";

import skills from "../data/skills";

const CarouselSkills: React.FC = () => {
  return (
    <div
      id="carouselExampleControls"
      className="relative carousel slide h-[100%] pb-20"
      data-bs-ride="carousel"
    >
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
      <h1 className="text-5xl font-bold text-secondary font-silk sx:text-2xl px-[4%] mb-12">
        Skill-Set
      </h1>
      <div className="relative w-full h-full overflow-hidden carousel-inner">
        <div className="relative float-left w-full carousel-item active ">
          <div className="flex flex-row flex-wrap w-full justify-evenly sm:justify-between">
            {skills[0].content.map((item, index) => {
              return (
                <>
                  <img
                    key={index}
                    src={item.image}
                    className="lg:w-[160px] md:w-[130px] sm:w-[100px] sx:w-[80px] hover:animate-wiggle mb-1 p-1 bg-secondary rounded-3xl"
                    alt={item.title}
                  />
                </>
              );
            })}
          </div>
          <div className="text-center carousel-caption">
            <h3 className="text-3xl text-secondary">{skills[0].title}</h3>
          </div>
        </div>

        <div className="relative float-left w-full carousel-item">
          <div className="flex flex-row flex-wrap w-full h-full justify-evenly sm:justify-between">
            {skills[1].content.map((item, index) => {
              return (
                <>
                  <img
                    key={index}
                    src={item.image}
                    className="lg:w-[160px] md:w-[130px] sm:w-[100px] sx:w-[80px] hover:animate-wiggle mb-1 p-1 bg-secondary rounded-3xl"
                    alt={item.title}
                  />
                </>
              );
            })}
          </div>
          <div className="text-center carousel-caption">
            <h5 className="text-3xl text-white">{skills[1].title}</h5>
          </div>
        </div>

        <div className="relative float-left w-full carousel-item">
          <div className="flex flex-row flex-wrap w-full h-full justify-evenly sm:justify-between">
            {skills[2].content.map((item, index) => {
              return (
                <>
                  <img
                    key={index}
                    src={item.image}
                    className="lg:w-[160px] md:w-[130px] sm:w-[100px] sx:w-[80px] hover:animate-wiggle mb-1 p-1 bg-secondary rounded-3xl"
                    alt={item.title}
                  />
                </>
              );
            })}
          </div>
          <div className="text-center carousel-caption">
            <h5 className="text-3xl text-white">{skills[2].title}</h5>
          </div>
        </div>
      </div>

      <button
        className="absolute left-0 flex justify-center p-0 text-center border-0 bottom-14 carousel-control-prev hover:outline-none hover:no-underline focus:outline-none focus:no-underline sm:buttom-0 sm:items-center"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span
          className="inline-block bg-no-repeat carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="absolute right-0 flex justify-center p-0 text-center border-0 bottom-14 carousel-control-next hover:outline-none hover:no-underline focus:outline-none focus:no-underline sm:buttom-0 sm:items-center"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span
          className="inline-block bg-no-repeat carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default CarouselSkills;
