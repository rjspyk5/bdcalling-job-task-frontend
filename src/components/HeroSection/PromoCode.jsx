import rightArrow from "../../assets/icons/right arrow.svg";
import salad from "../../assets/images/salad.png";

export const PromoCode = () => {
  return (
    <>
      <div className="relative ">
        <img className="absolute left-[8%]" src={rightArrow} alt="" />
        {/* promo card */}
        <div className="px-3 pt-3 py-1 bg-[#EBEBEB] inline-flex ml-[20%] items-center space-x-1 rounded-xl">
          {/* left side */}
          <div className=" font-rubik font-medium space-y-1">
            {" "}
            <p className="text-[#176D38] text-sm">Special Offer</p>
            <p className="text-2xl">Fresh Salad</p>
            <p className="flex items-center">
              <span className="text-base text-[#176D38]">Up to</span>
              <span className="text-2xl">70%</span>
              <span>off</span>
            </p>
            <p className="rounded-[35px] px-3 py-1 bg-[#176D38] text-[12px] font-semibold text-white">
              CODE : <span className="text-yellow-500">FRESH25</span>
            </p>
          </div>
          {/* right side salad */}
          <div className=" ">
            <img className="" src={salad} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
