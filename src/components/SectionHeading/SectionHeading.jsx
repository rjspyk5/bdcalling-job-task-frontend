import React from "react";

export const SectionHeading = ({ name, heading, subheading }) => {
  return (
    <div className="flex justify-center items-center flex-col space-x-4">
      <span className="font-rubik rounded-lg md:text-lg px-3 py-1 bg-primarybase1 text-primarybase mx-auto">
        {name}
      </span>
      <p className="font-rubik md:max-w-[500px] max-w-[290px] text-center lg:text-5xl md:text-4xl text-3xl text-primaryFontColor font-semibold md:font-medium">
        {heading}
      </p>
      <p className="md:max-w-[450px] text-center text-primaryFontColorbase2 max-w-[350px] text-sm md:text-base">
        {subheading}
      </p>
    </div>
  );
};
