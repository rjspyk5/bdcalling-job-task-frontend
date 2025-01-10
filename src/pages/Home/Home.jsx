import React from "react";
import { Blog } from "../../components/Blog/Blog";
import { WhatCustomerSay } from "../../components/WhatCustomerSay/WhatCustomerSay";

export const Home = () => {
  return (
    <div>
      <WhatCustomerSay />
      <Blog />
    </div>
  );
};
