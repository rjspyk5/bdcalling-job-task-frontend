import React from "react";
import img from "../../assets/images/aboutsection/Image.png";
import r5 from "../../assets/icons/r5.png";
import { CustomButton } from "../CustomButton/CustomButton";

export const AboutUs = () => {
  return (
    <div className="grid mt-16 md:mt-28 md:grid-cols-12 grid-cols-1 lg:px-[6%] xl:px-[8%] px-[3%] gap-16 items-center">
      <div className="md:col-span-7 flex justify-center items-center relative">
        <img className="w-full" src={img} alt="" />
        <img className="absolute right-0 top-[8%]" src={r5} alt="" />
      </div>
      <div className="md:col-span-5">
        <div className="space-y-4 ">
          <span className="font-rubik inline-flex rounded-lg md:text-lg px-3 py-1 bg-primarybase1 text-primarybase ">
            About Us
          </span>
          <p className="font-rubik md:max-w-[550px]   m-0 lg:text-[42px] md:text-4xl text-3xl text-primaryFontColor font-semibold md:font-medium">
            About Fresh Harvest
          </p>
          <p className="md:max-w-[450px]  text-primaryFontColorbase2 text-sm md:text-base">
            Welcome to Fresh Harvest, your premier destination for high-quality
            and fresh produce. We are passionate about providing you with the
            finest fruits, vegetables, and salad ingredients to nourish your
            body and delight your taste buds. With a commitment to excellence,
            sustainability, and customer satisfaction, Fresh Harvest is here to
            revolutionize your grocery shopping experience.
          </p>
          <div>
            <CustomButton name={"See all products"} />
          </div>
        </div>
      </div>
    </div>
  );
};
