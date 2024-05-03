import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import ShowBook from "./pages/ShowBook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <div className="h-4 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
      <ToastContainer position="top-left" autoClose={4000} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/create" element={<CreateBook />} />
          <Route path="/book/edit/:id" element={<EditBook />} />
          <Route path="/book/delete/:id" element={<DeleteBook />} />
          <Route path="/book/show/:id" element={<ShowBook />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
