import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Card = ({ title, author, publishYear, description, id }) => {
  return (
    <div className="md:w-[450px] flex flex-col h-max rounded-md p-4 border border-blue-200 hover:shadow-md hover:shadow-blue-200 hover:-translate-x-2 transition-all duration-200 ease-in">
      <h3 className="text-left capitalize font-medium text-xl text-gray-800 pb-2 font-mono">
        {title}
      </h3>
      <h3 className="text-lg capitalize font-medium text-gray-600 font-serif">
        {author}
      </h3>
      <div className="flex gap-1 text-sm font-bold text-gray-600 font-serif">
        <p className="">publish year:</p>
        <p>{publishYear}</p>
      </div>
      <p className="text-[16px] font-light text-justify lowercase text-gray-500 pb-2 font-serif my-2 border-b-2">
        {description}
      </p>
      <div className="flex justify-around items-center pt-3">
        <Link to={`/book/edit/${id}`}>
          <div className="flex items-center gap-x-1 text-slate-600 group transition-all duration-300 ease-in-out">
            <MdEdit className="group-hover:text-blue-600 group-hover:scale-105" />
            <button className="font-medium text-sm group-hover:text-blue-600 ">
              Edit
            </button>
          </div>
        </Link>
        <Link to={`/book/delete/${id}`}>
          <div className="flex items-center gap-x-1 text-slate-600 group transition-all duration-300 ease-in-out">
            <MdDelete className="group-hover:text-blue-600 group-hover:scale-105" />
            <button className="font-medium text-sm group-hover:text-blue-600 group-hover:scale-105">
              Delete
            </button>
          </div>
        </Link>
        <Link to={`/book/show/${id}`}>
          <div className="flex items-center gap-x-1 text-slate-600 group transition-all duration-300 ease-in-out">
            <AiOutlineInfoCircle className="group-hover:text-blue-600 group-hover:scale-105" />
            <button className="font-medium text-sm group-hover:text-blue-600 group-hover:scale-105 ">
              Details
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
