import React from "react";
import { getProjects } from "../utils/getProjects";

const Projects = () => {
  const projects = getProjects();
  return (
    <div className="bg-brightYellow text-blueGray flex flex-col items-center gap-5 p-5" id="projects">
      <h1 className="text-xl font-medium">MY PROJECTS</h1>
      <div className="flex flex-row justify-evenly gap-5 flex-wrap">
        {projects.map(({ link, title, image }, i) => {
          return (
            <div key={i} className="w-80 h-80 overflow-hidden hover:rounded-xl border-2 border-white duration-75 relative">
              <a href={link}>
                <img
                  src={image}
                  alt="project-image"
                  className="w-full h-full object-cover hover:scale-125  duration-1000"
                />
                <p className="absolute bottom-0 w-full text-blueGray font-bold bg-white py-2 px-3">{title}</p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
