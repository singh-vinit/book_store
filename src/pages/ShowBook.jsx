import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button";
import Skeleton from "../components/Skeleton";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setIsFetching(true);
    axios
      .get(`https://api-book-store-5qj7.onrender.com/api/v1/books/get/${id}`)
      .then((response) => {
        setBook(response.data.data);
        setIsFetching(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Button />
      <div className="max-w-sm md:max-w-lg mx-auto bg-white shadow-lg border-2 rounded-md overflow-hidden">
        {isFetching ? (
          <Skeleton />
        ) : (
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Book Information</div>
            <div className="mb-2">
              <span className="text-gray-700 mr-1">Book ID:</span>
              <span className="text-gray-900 font-medium text-sm">
                {book._id}
              </span>
            </div>
            <div className="mb-2">
              <span className="text-gray-700 mr-1">Author:</span>
              <span className="text-gray-900 font-medium text-sm">
                {book.author}
              </span>
            </div>
            <div className="mb-2">
              <span className="text-gray-700 mr-1">Title:</span>
              <span className="text-gray-900 font-medium text-sm">
                {book.title}
              </span>
            </div>
            <div className="mb-2">
              <span className="text-gray-700 mr-1">Publish Year:</span>
              <span className="text-gray-900 font-medium text-sm">
                {book.publishYear}
              </span>
            </div>
            <div className="mb-2">
              <span className="text-gray-700">Description:</span>
              <p className="text-gray-900 text-sm">{book.description}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ShowBook;
