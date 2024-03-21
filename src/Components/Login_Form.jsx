// import React from 'react'

import { useState } from "react";

const Login_Form = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {};

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-1/4 border border-secondary border-4 rounded-md m-auto px-2 py-5 "
      >
        <div className="w-full flex justify-center">
          <h1 className="text-xl font-bold text-black underline">
            Register-Form
          </h1>
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
    </div>
  );
};

export default Login_Form;
