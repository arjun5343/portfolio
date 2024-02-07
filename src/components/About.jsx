import React from "react";
import Services from "./Services";

const About = () => {
  const skills = [
    { name: "REACT JS", image: "./rr.png" },
    { name: "NODE JS", image: "./node.png" },
    { name: "EXPRESS JS", image: "./ej.png" },
    {
      name: "MONGODB",
      image: "./mm.png",
    },
  ];
  return (
    <div className="md:px-10 px-7 sm:-mt-24" id="about">
      <h1 className="text-primary font-semibold text-3xl mt-5">About Me:</h1>
      <p className="my-3 text-white leading-[2] text-justify">
        I'm Arjun, a Software Engineer working remotely for Help Scout on  websites in India.I've spent my time for working across different areas of coding; front-end development, email design,
        marketing site pages,to my current role designing websites for the companies across the world.  All these days I spent my time in researching, designing, prototyping, and coding,also help software engineer's
        get started with their careers.Out of the office you'll find me dreaming of soccer, playing bass guitar, and petting all the good dogs.I'm an experienced software
        engineer who constantly seeks out innovative solutions to everyday problems. I've honed my analytical thinking and collaboration skills, and I love working with a team.A
        results-oriented software engineer with entry-level experience specializing in designing custom software
        solutions and driving new feature development. A proven track record of coordinating with on-shore and
        off-shore teams throughout the application development cycle. Adept at defining user requirements and
        driving scalability for customers.A software engineering professional with entry-level experience
        specializing in software development, computer science, Python, and JavaScript. A proven track record of
        executing complex technical projects to develop and implement customer relationship management (CRM) tools.
        Adept at developing custom software solutions for client businesses.
        </p>
      <div className="md:flex my-7 items-center">
        <div className="text-primary text-8xl font-bold">5+</div>
        <p className="text-white text-2xl md:ml-5">
          years of dedicated learning, I have developed a diverse set of skills that enable me to excel in various aspects of my work.
        </p>
      </div>

      {/* skills */}
      {/* <div className="flex flex-col md:flex-row ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="md:w-[256px] md:h-[254px] bg-light hover:bg-primary flex flex-col items-baseline justify-end md:m-3 my-3 p-5 shadow-sm skills transition-all duration-500"
          >
            <img src={skill.image} alt={skill.name} className="h-15 w-15 justify-center" />
            <p className="mt-3 text-2xl text-white font-semibold text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>  */}

      {/* services section */}
      <Services />
    </div>
  );
};

export default About;
