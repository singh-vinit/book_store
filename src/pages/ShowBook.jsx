import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/books/${id}`)
      .then((response) => setBook(response.data.data))
      .catch((err) => console.log(err));
  }, []);
  return <>
  </>;
};

export default ShowBook;
