import React from "react";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import { ProductCard } from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import { useAxiosPublic } from "./../../hooks/useAxiosPublic";
import product from "../../assets/images/sampleProducts/16.png";
import r4 from "../../assets/icons/r4.png";
import r5 from "../../assets/icons/r5.png";
import { CustomButton } from "../CustomButton/CustomButton";

export const OurProducts = () => {
  const axiosPublic = useAxiosPublic();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const result = await axiosPublic.get("/api/v1/category");
      console.log(result.data);
      return result?.data;
    },
  });
  return (
    <div className="mt-16 md:mt-28 lg:px-[6%] xl:px-[8%] px-[3%] relative">
      <img src={r4} className="absolute md:left-[12%] left-0 top-[6%]" alt="" />
      <img src={r5} className="absolute md:right-[10%] right-0" alt="" />
      <SectionHeading
        name={"Products"}
        heading={"Our Fresh Products"}
        subheading={
          "We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients."
        }
      />
      <div className="flex justify-center items-center mt-4 mb-8 space-x-4">
        <button className="outline-1 outline-[#A6A6A6] border rubik border-[#A6A6A6] cursor-pointer text-[#A6A6A6] px-3 py-1 text-lg rounded-md ">
          All
        </button>
        <button className="outline-1 outline-[#A6A6A6] border rubik border-[#A6A6A6] cursor-pointer text-[#A6A6A6] px-3 py-1 text-lg rounded-md ">
          Fruits
        </button>
        <button className="outline-1 outline-[#A6A6A6] border rubik border-[#A6A6A6] cursor-pointer text-[#A6A6A6] px-3 py-1 text-lg rounded-md ">
          All
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <ProductCard img={product} name={"Mashrum"} price={20} />
        <ProductCard img={product} name={"Mashrum"} price={20} />
        <ProductCard img={product} name={"Mashrum"} price={20} />
        <ProductCard img={product} name={"Mashrum"} price={20} />
        <ProductCard img={product} name={"Mashrum"} price={20} />
        <ProductCard img={product} name={"Mashrum"} price={20} />
        <ProductCard img={product} name={"Mashrum"} price={20} />
        <ProductCard img={product} name={"Mashrum"} price={20} />
      </div>

      <div className="flex justify-center items-center mt-8">
        <CustomButton name={"See all products"} />
      </div>
    </div>
  );
};
