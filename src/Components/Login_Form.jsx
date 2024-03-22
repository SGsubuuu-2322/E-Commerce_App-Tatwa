// import React from 'react'

import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Login_Form = () => {
  const allUsers = useSelector((state) => state.allUsers);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(allUsers);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-1/4 border-secondary border-4 rounded-md mx-auto px-2 py-5 "
      >
        <div className="w-full flex justify-center">
          <h1 className="text-xl font-bold text-black underline">Login-Form</h1>
        </div>
        <div className="input-container flex flex-col">
          <label htmlFor="name" className="text-xl font-bold text-black">
            Email:{" "}
          </label>
          <input
            type="email"
            placeholder="Enter your email..."
            name="email"
            value={user.email}
            onChange={inputChangeHandler}
            className="bg-zinc-200 px-2"
          />
        </div>
        <div className="input-container flex flex-col">
          <label htmlFor="name" className="text-xl font-bold text-black">
            Password:{" "}
          </label>
          <input
            type="password"
            placeholder="Enter your password..."
            name="password"
            value={user.password}
            onChange={inputChangeHandler}
            className="bg-zinc-200 px-2"
          />
        </div>

        <div className="flex items-center justify-center mt-4">
          <button className="hover:bg-secondary hover:text-white active:scale-110 rounded-lg px-3 py-2 border-2 border-primary text-xl font-bold">
            Login
          </button>
        </div>
      </form>
      <Link
        to="/register"
        className="text-primary text-sm font-semibold hover:text-black hover:underline hover"
      >
        Not have an account ? Register then...
      </Link>
    </div>
  );
};

export default Login_Form;
