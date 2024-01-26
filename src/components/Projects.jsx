import React from "react";
import { getProjects } from "../utils/getProjects";

const Projects = () => {
  const projects = getProjects();
  return (
    <div className="bg-brightYellow text-blueGray flex flex-col gap-5 p-10">
      <h1>Projects</h1>
      <div className="flex flex-row justify-evenly">
        {projects.map(({ link, title, image }, i) => {
          return (
            <div key={i} className="w-80 h-80 rounded-xl overflow-hidden">
              <a href={link}>
                <img
                  src={image}
                  alt="project-image"
                  className="w-full h-full object-cover rounded-xl hover:scale-125 duration-1000"
                />
                {/* <p className="none absolute z-10 top-0 left-0 hover:block">{title}</p> */}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
