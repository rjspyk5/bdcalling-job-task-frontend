import { SectionHeading } from "../SectionHeading/SectionHeading";
import "swiper/css";
import "./style.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import img1 from "../../assets/images/customer/1.jpeg";
import img2 from "../../assets/images/customer/2.jpg";
import img3 from "../../assets/images/customer/3.jpg";
import { CustomerSayCard } from "./CustomerSayCard";
export const WhatCustomerSay = () => {
  return (
    <div className="mt-16 md:mt-28 lg:px-[6%] xl:px-[8%] px-[3%]">
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
