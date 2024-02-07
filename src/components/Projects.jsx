import React from "react";


const Projects = () => {
  const projects = [
    {

      title: "RESTAURANT MANAGEMENT SYSTEM AND CHATBOT",
      description:
        "The robust system is designed to streamline operations,enhance customer experience,and provide restaurateurs with comprehensive tools for effective management.",
      photo: "./rms.jpeg",
    },
    {
      title: "𝗕𝗟𝗢𝗖𝗞𝗖𝗛𝗔𝗜𝗡 𝗕𝗔𝗦𝗘𝗗 𝗦𝗬𝗦𝗧𝗘𝗠 𝗙𝗢𝗥 𝗘𝗩 𝗖𝗛𝗔𝗥𝗚𝗜𝗡𝗚 𝗦𝗧𝗔𝗧𝗜𝗢𝗡𝗦",
      description:
        " Developing a groundbreaking solution for the electric vehicle industry — a Blockchain-Enabled EV Charging Station Management System.System helps user to book the slot efficently and find the near by charging centre with real-time enivornment.",
      photo: "./blockchain.jpg",
    },
    {

      title: "E-COMMMERCE WEB APPLICATION",
      description:
        "I have successfully implemented the E-Commerce Web Application for online shopping.This application has not only facilitated online sales but has also contributed to increased customer satisfaction and enhanced brand visibility.",
      photo: "./ecm.jpeg",

    },
  ];
  return (
    <div className="md:px-10 px-7 my-8" id="projects">
      <h1 className="text-primary font-semibold text-3xl mt-16">
        Featured projects:
      </h1>
      <p className="my-3 text-white md:w-3/4 leading-[2]">
        I have worked on many projects over the course of being a Web Developer,
        here are a few of my live, real-world projects
      </p>
      {/* featured projects */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="flex flex-col shadow-sm md:w-[343px] bg-[#31313F] p-4 rounded"
            >
              <a
                href={project.photo}
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <img src={project.photo} alt={project.title} />
              </a>
              <h3 className="text-primary font-bold text-lg ">
                {project.title}
              </h3>
              <p className=" text-white mt-1 text-justify">{project.description}</p>
              <div className="mt-5 text-justify">
                <a href="#contact">
                  <button className="btn transition-all duration-500 bg-primary py-2 px-6 rounded text-white hover:bg-white hover:text-primary">
                    Contact me
                  </button>
                </a>
                <a href="https://github.com/arjun5343">
                  <button className="btn outline py-1.5 px-9 rounded border-none ml-5 text-white ">
                    Git Hub
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
