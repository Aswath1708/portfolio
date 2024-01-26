import React from "react";
import { getProjects } from "../utils/getProjects";

const Projects = () => {
  const projects = getProjects();
  return (
    <div className="bg-brightYellow text-blueGray">
      <h1>Projects</h1>
      <div>
        {projects.map(({ link, title, image }, i) => {
          return (
            <a href={link} key={i}>
              <img src={image} alt="project-image"/>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
