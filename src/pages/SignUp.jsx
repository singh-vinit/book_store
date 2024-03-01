import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const newUser = { name, email, password };
    const res = await axios.post(
      "http://localhost:4000/api/v1/user/signup",
      newUser,
      {
        withCredentials: true,
      }
    );
    console.log(res);
  }

  return (
    <>
      <form
        className="flex flex-col p-3 w-1/3 my-8 mx-auto border gap-y-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        onSubmit={handleSubmit}
      >
        <h1 className="text-lg font-semibold text-center uppercase">
          Register
        </h1>
        <div className="w-full">
          <label
            htmlFor=""
            className="block text-gray-800 font-semibold text-sm capitalize"
          >
            name
          </label>
          <input
            type="text"
            className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-blue-500"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="w-full">
          <label
            htmlFor=""
            className="block text-gray-800 font-semibold text-sm capitalize"
          >
            email
          </label>
          <input
            type="email"
            className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="w-full">
          <label
            htmlFor=" "
            className="block text-gray-800 font-semibold text-sm capitalize"
          >
            password
          </label>
          <input
            type="password"
            className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="cursor-pointer font-semibold text-sm mt-2 bg-black text-white rounded-md py-1 transition ease-in-out hover:bg-white hover:text-black hover:border border-black
        "
          type="submit"
        >
          register
        </button>
      </form>
    </>
  );
};

export default SignUp;
