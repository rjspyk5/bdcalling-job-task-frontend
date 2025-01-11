import personimg from "../../assets/images/person.png";
import appstore from "../../assets/icons/appstore.svg";
import googlePlay from "../../assets/icons/googleplay.svg";

import { PromoCode } from "./PromoCode";

export const HeroSection = () => {
  return (
    <div className="py-10">
      {/* absoulte position things which will need full space */}
      <div className="absolute inset-0 flex w-full ">
        <div className="w-4/6 bg-[#FFFFFF1F]"></div>
        <div className="w-2/6 bg-primarybase"></div>
      </div>

      {/* absoulte position things which will need full space */}
      <div className="relative ">
        <div className="z-20 relative max-w-[1150px] mx-auto">
          <span className="font-rubik mb-5 inline-flex rounded-lg md:text-lg px-3 py-1 bg-primarybase1 text-primarybase ">
            Welcome to Fresh Harvest
          </span>
          <p className="font-rubik mb-4 md:max-w-[550px] max-w-[290px]  m-0 lg:text-[42px] md:text-4xl text-3xl text-primaryFontColor font-semibold md:font-medium ">
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
        <img
          className="w-[500px] h-[450px] z-10 absolute md:right-[8%] top-0"
          src={personimg}
          alt=""
        />
      </div>
    </div>
  );
};
