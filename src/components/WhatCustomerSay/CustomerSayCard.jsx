import React from "react";
import icon from "../../assets/icons/Group 4.svg";

export const CustomerSayCard = ({ img }) => {
  return (
    <div className="grid  md:grid-cols-7 grid-cols-1 md:gap-10 gap-6 py-14">
      <div className="md:col-span-3 flex justify-center items-center relative">
        <img
          className="rounded-full mx-auto max-w-[300px] md:max-w-[250px] max-h-[350px]"
          src={img}
          alt=""
        />
        <img
          className="absolute md:top-[-60px] md:right-[51px] right-[66px] top-[-53px]"
          src={icon}
          alt=""
        />
      </div>
      <div className="md:col-span-4 flex justify-center items-center">
        <div className=" p-8 rounded-lg gap-20 bg-[#F4F6F6]">
          <p className="text-lg leading-relaxed">
            I absolutely love Fresh Harvest! The quality of their produce is
            outstanding. It's always fresh, flavorful, and delicious. The
            convenience of ordering online and having it delivered to my
            doorstep saves me so much time. Fresh Harvest has become my go-to
            for all my fruit and vegetable needs.
          </p>
          <p className="pt-6 text-sm">
            <span className="font-bold">Rakibul Islam </span> - Professional Web
            Developer
          </p>
        </div>
      </div>
    </div>
  );
};
