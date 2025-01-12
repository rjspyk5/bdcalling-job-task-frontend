import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import { useAxiosPublic } from "./../../hooks/useAxiosPublic";
import { FaHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { SectionHeading } from "../../components/SectionHeading/SectionHeading";

export const ProductDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const {
    data: product,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: [id],
    queryFn: async () => {
      const result = await axiosPublic.get(`/api/v1/products/${id}`);
      console.log(result?.data?.data);
      return result?.data?.data;
    },
  });

  return (
    <div className="mt-16 md:mt-28 lg:px-[6%] xl:px-[8%] px-[3%] relative ">
      <div className=" grid md:grid-cols-2 grid-cols-1 gap-10">
        <div className="flex md:max-w-[556px] mx-auto md:max-h-[556px] max-w-[342px] max-h-[342px] justify-center items-center border">
          <img className="w-full h-full " src={product?.images[0]} alt="" />
        </div>
        <div className="flex flex-col justify-normal md:justify-between">
          <div className=" md:flex-1 md:flex-grow space-y-4">
            <span className="font-rubik rounded-lg md:text-lg px-3 py-1 bg-primarybase1 text-primarybase mx-auto">
              test
            </span>
            <p className="font-rubik  lg:text-[42px] md:text-4xl text-3xl text-primaryFontColor font-semibold md:font-medium">
              {product?.productName}
            </p>
            <div className="flex space-x-2">
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <span className="font-rubik text-sm font-semibold">
                5.0 <span className="text-[8px]">(1 review)</span>
              </span>
            </div>
            <p className="font-rubik font-semibold text-secondarybase text-3xl">
              ${product?.price}/KG
            </p>
            <p className="md:max-w-[450px]  text-primaryFontColorbase2  text-sm md:text-base">
              {product?.description}
            </p>
          </div>
          <div>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="btn w-full md:w-1/2 text-center">
                <FaHeart size={24} className="mr-2 text-[#D9D9D9]" />
                Add to Wishlist
              </button>
              <button className="btn w-full md:w-1/2 text-white bg-secondarybase">
                {" "}
                <IoMdCart size={24} className="mr-2" /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex space-x-3 mt-14">
          <butoon className="btn rubik text-lg text-white bg-primarybase">
            Description
          </butoon>
          <butoon className="btn text-[#A6A6A6] border-[#D9D9D9] border ">
            Reviews(1)
          </butoon>
        </div>
        <p className="rounded-2xl p-6 mt-6 max-w-[800px] md:p-8 bg-[#F4F6F6]">
          {product?.description}
        </p>
      </div>
      <div className="lg:mt-20 md:mt-16 mt-12">
        <SectionHeading
          name={"Our Products"}
          heading={"Related products"}
          subheading={
            "We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients."
          }
        />
      </div>
    </div>
  );
};
