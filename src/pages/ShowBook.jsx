import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/books/${id}`)
      .then((response) => setBook(response.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="border mx-auto my-16 rounded-md pl-4 py-4 w-1/2 flex flex-col gap-y-4 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
        <div className="flex">
          <h1 className="text-xs font-semibold uppercase basis-1/3 text-center">
            id :
          </h1>
          <h1 className="text-xs capitalize">{book._id}</h1>
        </div>
        <div className="flex">
          <h1 className="text-xs font-semibold uppercase basis-1/3 text-center">
            title :
          </h1>
          <h1 className="text-xs capitalize">{book.title}</h1>
        </div>
        <div className="flex">
          <h1 className="text-xs font-semibold uppercase basis-1/3 text-center">
            author :
          </h1>
          <h1 className="text-xs capitalize">{book.author}</h1>
        </div>
        <div className="flex">
          <h1 className="text-xs font-semibold uppercase basis-1/3 text-center">
            publishYear :
          </h1>
          <h1 className="text-xs capitalize">{book.publishYear}</h1>
        </div>
        <div className="flex">
          <h1 className="text-xs font-semibold uppercase basis-1/3 text-center">
            description :
          </h1>
          <p className="text-xs capitalize basis-1/2 text-justify">
            {book.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default ShowBook;
