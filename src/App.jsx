import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import ShowBook from "./pages/ShowBook";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <>
      <div className="h-4 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/create" element={<CreateBook />} />
          <Route path="/book/edit/:id" element={<EditBook />} />
          <Route path="/book/delete/:id" element={<DeleteBook />} />
          <Route path="/book/show/:id" element={<ShowBook />} />
          <Route path="/user/register" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
