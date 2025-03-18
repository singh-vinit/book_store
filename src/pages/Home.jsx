import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import Skeleton from "../components/Skeleton";
import CreateBook from "./CreateBook";
import Empty from "../components/Empty";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isCreated, setIsCreated] = useState(0);
  console.log(isCreated);
  useEffect(() => {
    setIsFetching(true);
    axios
      .get("https://api-book-store-5qj7.onrender.com/api/v1/books/all")
      .then((response) => {
        setBooks(response.data.data);
        setIsFetching(false);
      })
      .catch((err) => console.log(err));
  }, [isCreated]);
  return (
    <>
      <div className="text-center py-8">
        <h1 className="font-medium text-3xl capitalize">
          manage your book collection
        </h1>
        <p className="font-normal text-lg text-gray-500">
          A simple, elegant way to keep track of your books
        </p>
      </div>
      <div className="p-4">
        <CreateBook onCreate={setIsCreated} />
      </div>
      <div className="h-[1.5px] w-[90%] bg-gray-400/40 my-4 mx-auto"></div>
      <div className="container mx-auto p-6 my-8 max-h-fit">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6">
          {isFetching ? (
            <Skeleton />
          ) : (
            books?.map((book) => {
              return (
                <Card
                  key={book._id}
                  title={book.title}
                  author={book.author}
                  description={book.description}
                  publishYear={book.publishYear}
                  id={book._id}
                />
              );
            })
          )}
        </div>
        {books.length == 0 && isFetching == false ? <Empty /> : null}
      </div>
    </>
  );
};

export default Home;
