import React from "react";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import { ProductCard } from "./ProductCard";

export const OurProducts = () => {
  return (
    <div>
      <SectionHeading
        name={"Products"}
        heading={"Our Fresh Products"}
        subheading={
          "We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients."
        }
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <ProductCard name={"Mashrum"} price={20} />
      </div>
    </div>
  );
};
