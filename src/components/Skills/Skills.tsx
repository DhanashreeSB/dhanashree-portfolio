import React from "react";
import { ProgressBar } from "./ProgressBar/ProgressBar";

export const Skills = () => {
  return (
    <>
      <p className="font-semibold text-lg md:text-3xl text-center border-b-2 border-b-gray-200 pb-8">
        Skills&nbsp;& technologies
      </p>
      <div className=" p-4 mt-4">
        <div className="w-full bg-zinc-100 rounded-md p-10">
          <div className="grid grid-cols-2 gap-x-8">
            <ProgressBar width={80} label={"HTML"} />
            <ProgressBar width={70} label={"CSS"} />
            <ProgressBar width={90} label={"Javascript"} />
            <ProgressBar width={80} label={"Typescript"} />
            <ProgressBar width={70} label={"ReactJS"} />
            <ProgressBar width={70} label={"Tailwind CSS"} />
            <ProgressBar width={60} label={"Bootstrap"} />
            <ProgressBar width={80} label={"Git"} />
            <ProgressBar width={50} label={"React Native"} />
            <ProgressBar width={50} label={"Java"} />
            <ProgressBar width={50} label={"Python"} />
            <ProgressBar width={80} label={"Progressive web apps"} />
            <ProgressBar width={50} label={"NodeJS"} />
            <ProgressBar width={50} label={"NodeJS"} />
          </div>
        </div>
      </div>
    </>
  );
};
