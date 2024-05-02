import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../components/Button";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://api-book-store-9spu.onrender.com/api/v1/books/get/${id}`)
      .then((response) => {
        const book = response.data.data;
        setTitle(book.title);
        setAuthor(book.author);
        setPublishYear(book.publishYear);
        setDescription(book.description);
      })
      .catch((err) => {
        console.log(`error: ${err}`);
      });
  }, []);

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    const data = {
      title,
      author,
      publishYear,
      description,
    };
    axios
      .put(
        `https://api-book-store-9spu.onrender.com/api/v1/books/update/${id}`,
        data
      )
      .then(() => {
        setIsLoading(false);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Button />
      <form
        className="flex flex-col p-3 w-1/3 my-8 mx-auto border gap-y-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        onSubmit={handleSubmit}
      >
        <div className="w-full">
          <label
            htmlFor=""
            className="block text-gray-800 font-semibold text-sm"
          >
            Title
          </label>
          <input
            type="text"
            className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="w-full">
          <label
            htmlFor=""
            className="block text-gray-800 font-semibold text-sm"
          >
            Author
          </label>
          <input
            type="text"
            className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="w-full">
          <label
            htmlFor=" "
            className="block text-gray-800 font-semibold text-sm"
          >
            PublishYear
          </label>
          <input
            type="text"
            className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
          />
        </div>
        <div className="w-full">
          <label
            htmlFor=" "
            className="block text-gray-800 font-semibold text-sm"
          >
            description
          </label>
          <textarea
            type="text"
            rows={3}
            cols={40}
            className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="border-2 font-medium py-1 bg-black text-white flex justify-center items-center"
        >
          {isLoading ? (
            <svg
              className="animate-spin h-5 w-5 mr-3"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21C10.5316 20.9987 9.08574 20.6382 7.78865 19.9498C6.49156 19.2614 5.38261 18.2661 4.55853 17.0507C3.73446 15.8353 3.22029 14.4368 3.06088 12.977C2.90147 11.5172 3.10167 10.0407 3.644 8.67604C4.18634 7.31142 5.05434 6.10024 6.17229 5.14813C7.29024 4.19603 8.62417 3.53194 10.0577 3.21378C11.4913 2.89563 12.9809 2.93307 14.3967 3.32286C15.8124 3.71264 17.1113 4.44292 18.18 5.45C18.3205 5.59062 18.3993 5.78125 18.3993 5.98C18.3993 6.17875 18.3205 6.36937 18.18 6.51C18.1111 6.58075 18.0286 6.63699 17.9376 6.67539C17.8466 6.71378 17.7488 6.73357 17.65 6.73357C17.5512 6.73357 17.4534 6.71378 17.3624 6.67539C17.2714 6.63699 17.189 6.58075 17.12 6.51C15.8591 5.33065 14.2303 4.62177 12.508 4.5027C10.7856 4.38362 9.07478 4.86163 7.66357 5.85624C6.25237 6.85085 5.22695 8.30132 4.75995 9.96345C4.29296 11.6256 4.41292 13.3979 5.09962 14.9819C5.78633 16.5659 6.99785 17.865 8.53021 18.6604C10.0626 19.4558 11.8222 19.6989 13.5128 19.3488C15.2034 18.9987 16.7218 18.0768 17.8123 16.7383C18.9028 15.3998 19.4988 13.7265 19.5 12C19.5 11.8011 19.579 11.6103 19.7197 11.4697C19.8603 11.329 20.0511 11.25 20.25 11.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.387 21 12 21Z"
                fill="#ffffff"
              />
            </svg>
          ) : null}
          <span>Save Changes</span>
        </button>
      </form>
    </>
  );
};

export default EditBook;
