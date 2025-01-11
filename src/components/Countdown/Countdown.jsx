import React from "react";
import bg from "../../assets/images/Bg.png";
import fruitsimg from "../../assets/images/countdownsection/image 1.png";
import yellow from "../../assets/images/countdownsection/Group 3.svg";
import { Count } from "./Count";

export const Countdown = () => {
  return (
    <div
      className="w-full bg-center bg-cover mt-16 md:mt-28 overflow-hidden "
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="lg:px-[6%] xl:px-[8%] px-[3%] py-20">
        <div className="md:space-y-3 space-y-2 relative">
          <span className="absolute hidden md:block xl:right-[-20%]  lg:right-[-20%] md:right-[-40%] bottom-[-15%] md:bottom-[-10%] xl:bottom-[-15%]">
            <span className="relative">
              <img className="absolute" src={yellow} alt="" />
            </span>
            <img
              className="xl:w-[77%] lg:w-[65%] md:w-[55%] "
              src={fruitsimg}
              alt=""
            />
          </span>
          <span className="font-rubik inline-flex rounded-lg md:text-lg px-3 py-1 bg-primarybase1 text-primarybase ">
            Special Offer
          </span>
          <p className="font-rubik mb-4 md:text-start text-center w-full  m-0 xl:text-[80px] lg:text-[60px] md:text-[53px] text-[45px] text-primaryFontColor font-semibold md:font-medium xl:leading-[80px] lg:leading-[60px] md:leading-[53px] leading-[45px]">
            Seasonal Fruit Bundle
          </p>
          <p className="font-rubik  md:text-start text-center  m-0 lg:text-[42px] md:text-4xl text-3xl text-primaryFontColor font-semibold md:font-medium">
            Discount up to <span className="text-secondarybase">80% OFF</span>
          </p>
          <div className="!mb-6 flex md:justify-start justify-center">
            <Count />
          </div>
          <div className="flex md:justify-start justify-center">
            <p className="rounded-2xl inline-flex justify-center items-center px-[8px] lg:px-3 md:px-2 py-1 bg-[#176D38] font-rubik md:text-3xl text-2xl font-semibold text-white">
              CODE : <span className="text-yellow-500">FRESH25</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
