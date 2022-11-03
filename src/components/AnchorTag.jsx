import React from "react";
import { Link } from "react-router-dom";

const AnchorTag = ({ isPage, link }) => {
  return (
    <>
      {isPage ? (
        <Link
          to={link.link}
          id={link.tag}
          key={link.id}
          className="font-semibold text-[#101828] text-sm md:text-base bg-[#EAECF0] text-center rounded-md border border-[#eaecf0] py-5 max-w-6xl w-10/12 hover:bg-[#D0D5DD] px-2"
        >
          {link.name}
        </Link>
      ) : (
        <a
          href={link.link}
          id={link.tag}
          key={link.id}
          className="font-semibold text-[#101828] text-sm md:text-base bg-[#EAECF0] text-center rounded-md border border-[#eaecf0] py-5 max-w-6xl w-10/12 hover:bg-[#D0D5DD] px-2 "
          target="_blank"
          rel="noreferrer"
        >
          {link.name}
        </a>
      )}
    </>
  );
};

export default AnchorTag;
