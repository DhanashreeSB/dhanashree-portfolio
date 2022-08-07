import React from "react";

type Props = {
  title: string;
  experience: string;
};

export const ExperienceCard = (props: Props) => {
  return (
    <div className="experienceCard text-center bg-white">
      <p className="font-semibold text-center pb-2">{props.title}</p>
      <hr />
      <p className="py-4">{props.experience}</p>
    </div>
  );
};
