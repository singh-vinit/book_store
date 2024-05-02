import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import Skeleton from "../components/Skeleton";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    setIsFetching(true);
    axios
      .get("https://api-book-store-9spu.onrender.com/api/v1/books/all")
      .then((response) => {
        setBooks(response.data.data);
        setIsFetching(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1 className="font-bold text-3xl text-center capitalize py-4 text-rose-500">
        book store
      </h1>
      <div className="container mx-auto p-4 border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {isFetching ? (
            <Skeleton />
          ) : (
            books.map((book) => {
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
      </div>
    </>
  );
};

export default Home;
