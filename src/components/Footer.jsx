import React from "react";
import I4G from "../assets/image/I4G.png";
import Zuri from "../assets/image/zuri.png";

const Footer = () => {
  return (
    <footer className="container mx-auto px-2">
      <hr />
      <div className="flex flex-col sm:flex-row py-6 sm:items-center justify-between gap-y-4 items-center">
        <img src={Zuri} alt="zuri" />
        <p className="font-medium text-[#667085] text-md">
          HNG Internship 9 Frontend Task
        </p>
        <img src={I4G} alt="I4G" />
      </div>
    </footer>
  );
};

export default Footer;
