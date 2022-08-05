import React from "react";
import { projects } from "../../constants/PortfolioConstants";
import { ProjectCard } from "./ProjectCard/ProjectCard";

export const Projects = () => {
  return (
    <div className="m-12 mt-24">
      {projects.map((project, index) => {
        return (
          <div key={index}>
            <ProjectCard
              {...project}
            />
          </div>
        );
      })}
    </div>
  );
};
