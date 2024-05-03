import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { toast } from "react-toastify";

const DeleteBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  function deleteHandler() {
    axios
      .delete(
        `/v1/books/delete/${id}`
      )
      .then(() => {
        toast.error("deleted successfully!");
        navigate("/");
      })
      .catch((err) => console.log(err));
  }
  function cancelHandler() {
    navigate("/");
  }
  return (
    <>
      <Button />
      <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Delete Confirmation</div>
          <p className="text-gray-700 mb-4">
            Are you sure you want to delete this item?
          </p>
          <div className="flex justify-end">
            <button
              onClick={deleteHandler}
              className="px-4 py-2 bg-red-500 text-white rounded-md mr-2 hover:bg-red-600"
            >
              Delete
            </button>
            <button
              onClick={cancelHandler}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteBook;
