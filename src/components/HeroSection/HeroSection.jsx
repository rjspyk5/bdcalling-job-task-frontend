import personimg from "../../assets/images/person.png";
import appstore from "../../assets/icons/appstore.svg";
import googlePlay from "../../assets/icons/googleplay.svg";

import { PromoCode } from "./PromoCode";

export const HeroSection = () => {
  return (
    <div className="pb-10 pt-20 top-0 relative">
      {/* absoulte position things which will need full space */}
      <div className="absolute inset-0 flex w-full h-full">
        <div className="w-4/6 bg-[#FFFFFF1F]"></div>
        <div className="w-2/6 bg-primarybase"></div>
      </div>
      <img
        className="max-h-[90%] absolute z-10  md:right-[4%] bottom-0"
        src={personimg}
        alt=""
      />

      {/* absoulte position things which will need full space */}
      <div className="relative md:px-[8%]">
        <div className="z-20 relative ">
          <span className="font-rubik mb-5 inline-flex rounded-lg md:text-lg px-3 py-1 bg-primarybase1 text-primarybase ">
            Welcome to Fresh Harvest
          </span>
          <p className="font-rubik mb-4 md:max-w-[700px] w-full  m-0 xl:text-[80px] lg:text-[60px] md:text-[50px] text-5xl text-primaryFontColor font-semibold md:font-medium xl:leading-[80px] lg:leading-[60px] md:leading-[50px]">
            Fresh Fruits and Vegetables
          </p>
          <p className="md:max-w-[450px] mb-8  text-primaryFontColorbase2 max-w-[350px] text-sm md:text-base">
            At Fresh Harvests, we are passionate about providing you with the
            freshest and most flavorful fruits and vegetables
          </p>
          <button className="btn bg-secondarybase text-white">Shop Now</button>

          <PromoCode />
          <div>
            <p className="mb-2">Download App</p>
            <div className="flex space-x-4">
              <button>
                <img src={appstore} alt="" />
              </button>
              <button>
                <img src={googlePlay} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
