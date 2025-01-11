import React from "react";
import { Blog } from "../../components/Blog/Blog";
import { WhatCustomerSay } from "../../components/WhatCustomerSay/WhatCustomerSay";
import { AboutUs } from "../../components/AboutUs/AboutUs";
import { OurProducts } from "../../components/OurProducts/OurProducts";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { Countdown } from "../../components/Countdown/Countdown";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <OurProducts />
      <AboutUs />
      <Countdown />
      <WhatCustomerSay />
      <div id="shop">
        <Blog />
      </div>
    </div>
  );
};
