import React, { useState } from "react";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import { ProductCard } from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import { useAxiosPublic } from "./../../hooks/useAxiosPublic";
import product from "../../assets/images/sampleProducts/16.png";
import r4 from "../../assets/icons/r4.png";
import r5 from "../../assets/icons/r5.png";
import { CustomButton } from "../CustomButton/CustomButton";
import { Link, useLocation } from "react-router";

export const OurProducts = () => {
  const { pathname } = useLocation();
  const axiosPublic = useAxiosPublic();
  const [activeCategory, setactiveCategory] = useState("all");
  const {
    data: category,
    isLoading: categoryLoading,
    refetch: categoryRefetch,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const result = await axiosPublic.get("/api/v1/category");
      return result?.data?.data;
    },
  });

  const {
    data: products,
    refetch: productsRefetch,
    isLoading: productsLoading,
  } = useQuery({
    queryKey: ["all products"],
    queryFn: async () => {
      const result = await axiosPublic.get("/api/v1/products");

      return result?.data?.data;
    },
  });

  const filteredProducts =
    products &&
    products?.filter((el) => {
      if (activeCategory === "all") {
        return el?.categoryId !== activeCategory;
      }
      return el?.categoryId === activeCategory;
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
        <button
          onClick={() => setactiveCategory("all")}
          className={`${
            activeCategory == "all"
              ? "bg-primarybase text-white"
              : "outline-[#A6A6A6] outline-1  border text-[#A6A6A6] border-[#A6A6A6]"
          }  rubik  cursor-pointer px-3 py-1 text-lg rounded-md `}
        >
          All
        </button>
        {category &&
          category?.map((el, index) => (
            <button
              onClick={() => setactiveCategory(el.id)}
              key={el.id}
              className={`${
                activeCategory == el.id
                  ? "bg-primarybase text-white"
                  : "outline-[#A6A6A6] outline-1  border text-[#A6A6A6] border-[#A6A6A6]"
              }  rubik  cursor-pointer px-3 py-1 text-lg rounded-md `}
            >
              {el?.categoryName?.charAt(0).toUpperCase() +
                el?.categoryName?.slice(1)}
            </button>
          ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {!productsLoading &&
          filteredProducts
            ?.slice(0, pathname === "/" ? 8 : filteredProducts.length)
            .map((el) => (
              <ProductCard data={el} key={el.id} img={product} price={20} />
            ))}
      </div>
      {pathname === "/" && filteredProducts?.length > 8 && (
        <Link to="/products" className="flex justify-center items-center mt-8">
          <CustomButton name={"See all products"} />
        </Link>
      )}
    </div>
  );
};
