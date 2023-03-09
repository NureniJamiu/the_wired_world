import React from "react";
import { GiSelfLove } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="container px-24 py-3 text-gray-100 bg-red-500 mt-5 grid grid-cols-3">
      <span className="col-span-2 ">copyright, 2023. All rights reserved</span>
      <span className="flex items-center gap-2">
        made with <GiSelfLove /> by{" "}
        <span className="font-bold cursor-pointer hover:text-blue-400">
          &lt;Dhulnurein /&gt;
        </span>
      </span>
    </div>
  );
};

export default Footer;
