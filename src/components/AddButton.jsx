import React from "react";
import { useNavigate } from "react-router-dom";

const AddButton = ({ onAdd, open }) => {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/book/create");
  }
  const btnContent = open ? <span>close</span> : <span>add</span>;
  return (
    <button
      className="text-rose-400 font-bold text-center px-4 py-2 rounded-md border shadow-md shadow-rose-500/40 hover:border-rose-700"
      onClick={clickHandler}
    >
      {btnContent}
    </button>
  );
};

export default AddButton;
