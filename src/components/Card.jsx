import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Card = ({ title, author, publishYear, description, id }) => {
  return (
    <div className="flex flex-col bg-white h-max rounded-md py-3 px-2 border-2">
      <h3 className="text-center font-bold text-xl text-gray-800 pb-2">
        {title}
      </h3>
      <h3 className="text-sm font-semibold text-gray-900">{author}</h3>
      <p className="text-xs text-gray-500 pb-2">{description}</p>
      <div className="flex gap-1 text-xs text-gray-500 border-b pb-2">
        <p className="">publish year:</p>
        <p>{publishYear}</p>
      </div>
      <div className="flex justify-around items-center pt-3">
        <Link to={`/book/edit/${id}`}>
          <div className="flex gap-2 text-gray-600 hover:scale-110 duration-200 hover:cursor-pointer">
            <MdEdit className="text-green-700" />
            <button className="font-semibold text-xs text-green-700">
              Edit
            </button>
          </div>
        </Link>
        <Link to={`/book/delete/${id}`}>
          <div className="flex gap-2 text-gray-600 hover:scale-110 duration-200 hover:cursor-pointer">
            <MdDelete className="text-red-700" />
            <button className="font-semibold text-xs text-red-700">
              Delete
            </button>
          </div>
        </Link>
        <Link to={`/book/show/${id}`}>
          <div className="flex gap-2 text-gray-600 hover:scale-110 duration-200 hover:cursor-pointer">
            <AiOutlineInfoCircle className="text-yellow-500" />
            <button className="font-semibold text-xs text-yellow-500">
              Details
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
