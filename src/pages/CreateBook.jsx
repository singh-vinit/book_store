import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const CreateBook = ({ handleIsActive }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  function handleSubmit() {
    const data = {
      title,
      author,
      publishYear,
      description,
    };
    axios
      .post("http://localhost:4000/api/books/new", data)
      .then(() => {
        alert("created successful");
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <form
      className="flex flex-col p-3 w-1/3 my-8 mx-auto border gap-y-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
      onSubmit={handleSubmit}
    >
      <button onClick={() => handleIsActive(false)}>
        <IoMdClose className="ml-auto hover:rotate-45 transition ease-in-out" />
      </button>

      <div className="w-full">
        <label htmlFor="" className="block text-gray-800 font-semibold text-sm">
          Title
        </label>
        <input
          type="text"
          className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="w-full">
        <label htmlFor="" className="block text-gray-800 font-semibold text-sm">
          Author
        </label>
        <input
          type="text"
          className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="w-full">
        <label
          htmlFor=" "
          className="block text-gray-800 font-semibold text-sm"
        >
          PublishYear
        </label>
        <input
          type="text"
          className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
          value={publishYear}
          onChange={(e) => setPublishYear(e.target.value)}
        />
      </div>
      <div className="w-full">
        <label
          htmlFor=" "
          className="block text-gray-800 font-semibold text-sm"
        >
          description
        </label>
        <textarea
          type="text"
          rows={3}
          cols={40}
          className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-rose-500 group mt-2">
        <span className="relative z-10 text-rose-500 group-hover:text-white text-xl duration-500">
          create
        </span>
        <span className="absolute w-full h-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
        <span className="absolute w-full h-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
      </button>
    </form>
  );
};

export default CreateBook;
