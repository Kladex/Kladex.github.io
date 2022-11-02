import React from "react";

import skills from "../data/skills";

const Skills: React.FC = () => {
  return (
    <div className="flex flex-col px-[5%] mt-10 text-secondary justify-center">
      <h1 className="text-5xl font-bold font-silk sx:text-2xl">Skill-Set</h1>
      <div className="flex items-center justify-between lg:flex-row md:flex-col sm:flex-col sx:flex-col all-skill-boxes h-content">
        {skills.map((skill) => {
          return (
            <div
              className="lg:w-[30%] md:w-full sx:w-full border-0 rounded-lg shadow-3xl skill-box hover:border-emerald-100 hover:shadow-secondarydark/50 text-secondary mt-10 sm:w-full"
              key={skill.id}
            >
              <h3 className="text-3xl font-bold sx:text-xl">{skill.title}</h3>
              <div className="flex flex-row flex-wrap content-boxes justify-evenly sm:justify-between">
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
