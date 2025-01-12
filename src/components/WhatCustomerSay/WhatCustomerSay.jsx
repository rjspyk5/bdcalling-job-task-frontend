import { SectionHeading } from "../SectionHeading/SectionHeading";
import "swiper/css";
import "./style.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import img1 from "../../assets/images/customer/1.jpeg";
import leaf from "../../assets/icons/r5.png";
import leaf2 from "../../assets/icons/r4.png";

import { CustomerSayCard } from "./CustomerSayCard";
export const WhatCustomerSay = () => {
  return (
    <div className="mt-16 md:mt-28 lg:px-[6%] xl:px-[8%] px-[3%] relative">
      <img
        src={leaf}
        alt=""
        className="absolute lg:right-[8%] md:right-10 right-2 lg:top-[6%] top-2 md:top-[4%]"
      />
      <img
        src={leaf2}
        alt=""
        className="absolute md:left-[8%] left-3 lg:left-[15%] top-[5%]"
      />
      <SectionHeading
        name="Testimonial"
        heading="What Our Customers Say"
        subheading="Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest"
      />{" "}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CustomerSayCard img={img1} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <CustomerSayCard img={img1} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <CustomerSayCard img={img1} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
