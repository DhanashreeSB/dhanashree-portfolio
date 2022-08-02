import React from "react";
import { projects } from "../../constants/PortfolioConstants";
import { ProjectCard } from "./ProjectCard/ProjectCard";

export const Projects = () => {
  return (
    <div className="m-6">
      {projects.map((project, index) => {
        return (
          <>
            <ProjectCard
              {...project}
            />
          </>
        );
      })}
    </div>
  );
};
