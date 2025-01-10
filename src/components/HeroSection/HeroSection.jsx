import personimg from "../../assets/images/person.png";

export const HeroSection = () => {
  return (
    <div className="grid grid-cols-7 relative">
      {/* absoulte position things which will need full space */}
      <img
        className="absolute w-[500px] h-[450px] right-[3%]"
        src={personimg}
        alt=""
      />
      {/* absoulte position things which will need full space */}
      <div className="col-span-5 bg-[#FFFFFF1F]">
        <div className=" ">
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
          <div className="relative"></div>
        </div>
      </div>
      <div className="col-span-2 w-full h-full bg-primarybase"></div>
    </div>
  );
};
