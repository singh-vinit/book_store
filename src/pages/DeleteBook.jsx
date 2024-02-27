import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const DeleteBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  function handleDelete() {
    axios.delete(`http://localhost:4000/api/v1/books/${id}`);
    navigate("/");
  }
  function handleCancel() {
    navigate("/");
  }
  return (
    <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex-col w-1/2 mx-auto my-16 p-4">
      <p className="capitalize text-rose-500 text-lg text-center mb-6">
        sure, you want to delete it from collection
      </p>
      <div className="flex justify-between">
        <button
          className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white w-16 border border-green-500 hover:border-transparent rounded uppercase"
          onClick={handleCancel}
        >
          no
        </button>
        <button
          className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white w-16 border border-red-500 hover:border-transparent rounded uppercase"
          onClick={handleDelete}
        >
          yes
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
