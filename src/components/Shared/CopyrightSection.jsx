import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

export const CopyrightSection = () => {
  return (
    <div className="flex lg:px-[6%] xl:px-[8%] px-[3%]  bg-[#F4F6F6] flex-col-reverse md:flex-row justify-between items-center md:items-start pt-5 pb-8 md:pb-6 border-t ">
      <p className="text-sm text-gray-600 pt-6 md:pt-0">
        © Copyright 2024,All rights reserved by{" "}
        <Link target="_blank" to="https://rakibulim.web.app">
          Rakibul Islam
        </Link>
      </p>
      <ul className="flex space-x-3">
        <li>
          <Link className="transition-colors duration-300 hover:text-deep-purple-accent-400">
            <FaTwitter size={26} />
          </Link>
        </li>
        <li>
          <Link className=" transition-colors duration-300 hover:text-deep-purple-accent-400">
            <FaFacebook size={26} />
          </Link>
        </li>
        <li>
          <Link className=" transition-colors duration-300 hover:text-deep-purple-accent-400">
            <RiInstagramFill size={26} />
          </Link>
        </li>
      </ul>
    </div>
  );
};
