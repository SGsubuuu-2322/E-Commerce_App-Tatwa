// import React from 'react'

import { useState } from "react";

const Register_Form = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const inputChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <form className="w-1/4 border border-secondary border-4 rounded-md m-auto p-5">
        <div className="w-full flex justify-center">
          <h1 className="text-xl font-bold text-black underline">
            Register-Form
          </h1>
        </div>
        <div className="input-container flex flex-col">
          <label htmlFor="name" className="text-xl font-bold text-black">
            Name:{" "}
          </label>
          <input
            type="text"
            placeholder="Enter your name..."
            name="name"
            value={user.name}
            onChange={inputChangeHandler}
            className="bg-zinc-200 px-2"
          />
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
            value={user.password1}
            onChange={inputChangeHandler}
            className="bg-zinc-200 px-2"
          />
        </div>
        <div className="input-container flex flex-col">
          <label htmlFor="name" className="text-xl font-bold text-black">
            Re-Enter Password:{" "}
          </label>
          <input
            type="password"
            placeholder="Re-enter your password..."
            name="name"
            value={user.password2}
            onChange={inputChangeHandler}
            className="bg-zinc-200 px-2"
          />
        </div>
      </form>
    </div>
  );
};

export default Register_Form;
