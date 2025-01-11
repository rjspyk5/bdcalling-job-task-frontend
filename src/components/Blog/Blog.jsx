import React from "react";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import { BlogCard } from "./BlogCard";
import img2 from "../../assets/images/blog/image 2.png";
import img4 from "../../assets/images/blog/image 4.png";
import img3 from "../../assets/images/blog/image 3.png";

export const Blog = () => {
  return (
    <div className="mt-8 md:mt-16 lg:px-[6%] xl:px-[8%] px-[3%] relative">
      <SectionHeading
        name="Blog"
        heading="Fresh Harvest Blog"
        subheading="Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 md:pt-10">
        <BlogCard img={img2} />
        <BlogCard img={img3} />
        <BlogCard img={img4} />
      </div>
    </div>
  );
};
