import React from "react";
import { experiencesGetStartedLLP, experiencesTCS } from "../../constants/PortfolioConstants";
import "./Experience.css";
import { ExperienceCard } from "./ExperienceCard";

export const Experience = () => {
  return (
    <div className="px-10 mt-24">
      <div className="">
        <div className="text-2xl font-semibold text-center pb-4">
          Experience
        </div>
        <div className="p-97 m-auto max-w-960 bg-violet-400 rounded-lg">
          <div className="p-97">
            <div
              className=""
              style={{
                animation: "opacityFade 1s forwards",
                animationDelay: "0.3s",
              }}
            ></div>
            <div>
              <div className="pb-2 font-semibold">
                Tata Consultancy Services (Present) - Systems Engineer (Grade C2)
              </div>
              <div className="experienceContainer">
                {experiencesTCS.map((experience, index) => {
                  return (
                    <ExperienceCard
                      title={experience.title}
                      experience={experience.experience}
                    />
                  );
                })}
              </div>
              <div className="py-2 font-semibold">
                GetStarted LLP - Intern (December 2018 - February 2019)
              </div>
              <div className="experienceContainer">
                {experiencesGetStartedLLP.map((experience, index) => {
                  return (
                    <ExperienceCard
                      title={experience.title}
                      experience={experience.experience}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
