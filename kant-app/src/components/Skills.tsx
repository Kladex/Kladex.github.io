import React from "react";
import skills from "../data/skills";

const Skills: React.FC = () => (
  <div className="px-5 max-w-6xl mx-auto text-secondary dark:text-primary">
    <h2 className="text-3xl sm:text-5xl font-bold font-silk mb-10">Skill-Set</h2>
    <div className="grid gap-6 lg:grid-cols-3">
      {skills.map(skill => (
        <div key={skill.id} className="rounded-xl border border-current/20 p-5">
          <h3 className="text-2xl font-semibold mb-6">{skill.title}</h3>
          <ul className="grid grid-cols-3 gap-5">
            {skill.content.map(item => (
              <li key={item.id} className="flex flex-col items-center gap-2 text-center">
                <img src={item.image} alt="" width="64" height="64" loading="lazy" className="w-16 h-16 object-contain bg-white rounded-lg p-2" />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);
export default Skills;
