import React from "react";

const Experience: React.FC = () => (
  <div className="px-5 max-w-6xl mx-auto text-secondary dark:text-primary">
    <h2 className="text-3xl sm:text-5xl font-bold font-silk mb-10">Experience</h2>
    <article className="border-l-2 border-teal-400 pl-6 py-2">
      <h3 className="text-2xl font-semibold">Full Stack Developer</h3>
      <p className="text-xl mt-2">Muze Innovation</p>
      <p className="mt-3 opacity-80">
        <time dateTime="2023-01">January 2023</time> – Present
      </p>
    </article>
    <article className="border-l-2 border-teal-400 pl-6 py-2 mt-8">
      <h3 className="text-2xl font-semibold">Developer Fellow</h3>
      <p className="text-xl mt-2">TechUp</p>
      <p className="mt-2 opacity-80">Short-term contract</p>
      <p className="mt-3 opacity-80">
        <time dateTime="2022-07">July 2022</time> – <time dateTime="2022-12">December 2022</time>
      </p>
    </article>
  </div>
);

export default Experience;
