import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import CreateBook from "./CreateBook";
import { MdOutlineAddBox } from "react-icons/md";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen(true);
  }
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/books/all")
      .then((response) => setBooks(response.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="flex justify-center py-2 px-1">
        <div className="basis-1/4"></div>
        <h1 className="capitalize font-semibold text-lg basis-1/2 text-center">{`Hello vinit`}</h1>
        <button className="cursor-pointer basis-1/4" onClick={handleOpen}>
          <MdOutlineAddBox className="text-blue-400 text-3xl ml-auto hover:rotate-45 transition ease-in-out" />
        </button>
      </div>
      {isOpen ? (
        <CreateBook handleIsActive={setIsOpen} />
      ) : (
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 p-12">
          {books.map((book) => {
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
          })}
        </div>
      )}
    </>
  );
};

export default Home;
