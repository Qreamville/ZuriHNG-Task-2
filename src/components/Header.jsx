import React from "react";
import ProfileImage from "../assets/image/balikis.jpg";
import { RiShareForwardLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineCamera } from "react-icons/hi";

const Header = () => {
  return (
    <header className="h-52 flex flex-col items-center justify-center mt-8 relative">
      <div className="flex flex-col gap-y-3 items-center">
        <div className="profile-container relative h-24 w-24 cursor-pointer">
          <img
            id="profile__img"
            src={ProfileImage}
            alt="profile"
            className="rounded-full"
          />
          <div className="profile-overlay bg-[#344054BF] top-0 bottom-0 w-full rounded-full absolute">
            <HiOutlineCamera
              color="#F9FAFB"
              size={28}
              className="absolute bottom-1 left-1/2 -translate-x-1/2"
            />
          </div>
        </div>
        <h2
          id="twitter"
          className="text-[#101828] font-bold text-xl tracking-wider"
        >
          @Balikis_Oyeleye
        </h2>
        <p id="slack" className="hidden">
          Balikis Oyeleye
        </p>
      </div>
      <div className="absolute top-0 right-10 md:right-40 xl:right-80 border h-10 w-10 grid place-items-center border-dashed border-[#d0d5dd] rounded-full cursor-pointer">
        <RiShareForwardLine
          size={20}
          color="#98A2B3"
          className="hidden md:block"
        />
        <BsThreeDots size={20} color="#98A2B3" className="md:hidden block" />
      </div>
    </header>
  );
};

export default Header;
