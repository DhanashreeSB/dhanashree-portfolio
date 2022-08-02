import React from "react";
import { BsGithub } from "react-icons/bs";
import { ProjectI } from "../../../models/Project.interface";
import "./ProjectCard.css";

export const ProjectCard = (props: ProjectI) => {
  const openLink = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <div className="bg-white card-shadow rounded-md mt-6">
      <div className="text-xl font-semibold p-4">{props.name}</div>
      <hr></hr>
      <div className="p-4">
        {props.description}
        <div className="flex">
          <div className="flex pt-4">
            {props.live.length > 0 ? (
              <button
                type="button"
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-violet-500 focus:outline-none bg-white rounded-lg border border-violet-700 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={() => openLink(props.live)}
              >
                View demo
              </button>
            ) : (
              <></>
            )}

            <button
              type="button"
              className="flex focus:outline-none text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-900"
              onClick={() => openLink(props.source)}
            >
              <BsGithub size={20} />
              <p className="ml-2">Source code</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
