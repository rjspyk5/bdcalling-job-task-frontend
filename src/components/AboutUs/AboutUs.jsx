import React from "react";
import img from "../../assets/images/aboutsection/Image.png";

export const AboutUs = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-7">
        <img className="" src={img} alt="" />
      </div>
      <div className="col-span-5">
        <div className=" ">
          <span className="font-rubik inline-flex rounded-lg md:text-lg px-3 py-1 bg-primarybase1 text-primarybase ">
            About Us
          </span>
          <p className="font-rubik md:max-w-[550px] max-w-[290px]  m-0 lg:text-[42px] md:text-4xl text-3xl text-primaryFontColor font-semibold md:font-medium">
            About Fresh Harvest
          </p>
          <p className="md:max-w-[450px]  text-primaryFontColorbase2 max-w-[350px] text-sm md:text-base">
            Welcome to Fresh Harvest, your premier destination for high-quality
            and fresh produce. We are passionate about providing you with the
            finest fruits, vegetables, and salad ingredients to nourish your
            body and delight your taste buds. With a commitment to excellence,
            sustainability, and customer satisfaction, Fresh Harvest is here to
            revolutionize your grocery shopping experience.
          </p>
        </div>
      </div>
    </div>
  );
};
