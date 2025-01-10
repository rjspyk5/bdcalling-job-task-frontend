import React from "react";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import { BlogCard } from "./BlogCard";

export const Blog = () => {
  return (
    <div>
      <SectionHeading
        name="Blog"
        heading="Fresh Harvest Blog"
        subheading="Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 md:pt-10">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};
