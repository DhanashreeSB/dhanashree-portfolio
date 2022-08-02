import React from "react";

type Props = {
  label: string;
  width: number;
};

export const ProgressBar = (props: Props) => {
  return (
    <div className="py-1">
      <div className="flex">
        <div className="mb-1 text-lg font-semibold dark:text-white pb-2">
          {props.label}
        </div>
        <div className="mb-1 text-lg font-semibold dark:text-white pb-2 ml-auto">
          {`${props.width}%`}
        </div>
      </div>
      <div className="mb-4 w-full h-2 bg-gray-300 rounded-full dark:bg-gray-700">
        <div
          className="h-2 bg-violet-600 rounded-full dark:bg-blue-500 text-blue-100 text-center p-0.5 pt-1 leading-none rounded-l-full"
          style={{ width: `${props.width}%` }}
        ></div>
      </div>
    </div>
  );
};
