import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link to="/">
      <button className="flex items-center text-white bg-black ml-4 mt-4 pl-1 pr-2 py-1 rounded-sm hover:bg-white hover:text-black hover:border border-black transition ease-out">
        <IoIosArrowBack className="text-xs" />
        <span className="text-xs">Back</span>
      </button>
    </Link>
  );
};

export default Button;
