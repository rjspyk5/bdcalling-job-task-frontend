import React from "react";

export const CustomerSayCard = ({ img }) => {
  return (
    <div className="grid  md:grid-cols-6 grid-cols-1">
      <div className="col-span-2">
        <img
          className="rounded-full mx-auto max-w-[300px] max-h-[400px]"
          src={img}
          alt=""
        />
      </div>
      <div className="col-span-4 flex justify-center items-center">
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
