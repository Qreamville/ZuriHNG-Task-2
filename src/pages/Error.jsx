import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <main className="grid place-items-center my-44 p-2">
      <div>
        <h4 className="text-base font-semibold text-[#1570EF]">404 error</h4>
        <h1 className="font-semibold text-4xl md:text-6xl tracking-tight text-[#101828] my-2">
          We can't find that page
        </h1>
        <p className="text-[#475467] text-lg md:text-xl font-normal mb-8">
          Sorry, the page you are looking for doesn't exist.
        </p>
        <div className="flex flex-col-reverse gap-2 md:flex-row text-center">
          <button
            className="btn__back flex items-center gap-x-2 text-center justify-center"
            onClick={() => navigate(-1)}
          >
            <BsArrowLeft />
            <span>Go back</span>
          </button>
          <Link className="btn__home" to={"/"}>
            Take me home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Error;
