import skills from "../data/skills";
import React from "react";

const Skills: React.FC = () => {
  return (
    <div
      className="flex flex-col text-secondary lg:p-28 md:p-24 sm:p-10 sx:p-2 sx:pt-16 md:w-full"
      id="skill-section"
    >
      <h1 className="pb-10 text-5xl font-bold font-silk sx:text-2xl">
        Skill-Set
      </h1>
      <div className="flex items-center justify-between lg:flex-row md:flex-col sm:flex-col sx:flex-col all-skill-boxes h-content">
        {skills.map((skill) => {
          return (
            <div
              className="lg:w-[30%] md:w-full sx:w-full lg:p-10 md:p-5 xs:p-5 border-0 rounded-lg shadow-3xl skill-box hover:border-emerald-100 hover:shadow-secondarydark/50  text-secondary mt-10 sm:p-5"
              key={skill.id}
            >
              <h3 className="pl-3 text-3xl font-bold sx:text-xl">
                {skill.title}
              </h3>
              <div className="flex flex-row flex-wrap content-boxes justify-evenly">
                {skill.content.map((item) => {
                  return (
                    <div
                      className="flex flex-col items-center justify-end pt-6 lg:w-1/3 lg:min-w-[100px] details"
                      key={item.id}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-[100px] h-[100px] hover:animate-wiggle mb-1 p-1 bg-secondary rounded-3xl"
                      />
                      <h3 className="text-xl sx:text-base">{item.title}</h3>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Skills;
