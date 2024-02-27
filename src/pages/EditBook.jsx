import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/books/${id}`)
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
    const data = {
      title,
      author,
      publishYear,
    };
    axios
      .put(`http://localhost:4000/api/books/${id}`, data)
      .then(() => {
        alert("changes saved");
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <form
      className="flex flex-col p-3 w-1/3 my-8 mx-auto border gap-y-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
      onSubmit={handleSubmit}
    >
      <div className="w-full">
        <label htmlFor="" className="block text-gray-800 font-semibold text-sm">
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
        <label htmlFor="" className="block text-gray-800 font-semibold text-sm">
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
      <button className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-red-400 group mt-2">
        <span className="relative z-10 text-red-400 group-hover:text-white text-xl duration-500">
          Save
        </span>
        <span className="absolute w-full h-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
        <span className="absolute w-full h-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
      </button>
    </form>
  );
};

export default EditBook;
