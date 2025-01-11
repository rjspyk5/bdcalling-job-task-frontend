import rightArrow from "../../assets/icons/right arrow.svg";
import salad from "../../assets/images/salad.png";

export const PromoCode = () => {
  return (
    <>
      <div className="relative ">
        <img
          className="absolute hidden md:block lg:left-[8%] md:left-[10%]"
          src={rightArrow}
          alt=""
        />
        {/* promo card */}
        <div className="px-3  bg-[#EBEBEB] inline-flex md:ml-[20%] lg:ml-[15%] items-center space-x-1 rounded-xl">
          {/* left side */}
          <div className=" font-rubik font-medium md:space-y-1">
            {" "}
            <p className="text-[#176D38] md:text-sm text-[8px]">
              Special Offer
            </p>
            <p className="md:text-xl lg:text-2xl text-base">Fresh Salad</p>
            <p className="flex items-center lg:text-base md:text-sm text-[9px]">
              <span className=" text-[#176D38]"> Up to </span>
              <span className="lg:text-2xl md:text-xl text-[13px]"> 70% </span>
              <span> off </span>
            </p>
            <p className="rounded-2xl flex justify-center items-center px-[8px] lg:px-3 md:px-2 py-1 bg-[#176D38] lg:text-[12px] md:text-[9px] text-[6px] font-semibold text-white">
              CODE : <span className="text-yellow-500">FRESH25</span>
            </p>
          </div>
          {/* right side salad */}
          <div className=" ">
            <img
              className="max-w-20 md:max-w-28 lg:max-w-36"
              src={salad}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
