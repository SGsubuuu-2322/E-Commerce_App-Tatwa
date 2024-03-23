// import React from 'react'

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerAPI } from "../Api/Auth";
import { Link, useNavigate } from "react-router-dom";

const Register_Form = () => {
  const { allUsers } = useSelector((state) => state.allUsers);
  const Navigate = useNavigate();
  const Dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const inputChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(user);
    if (
      user.name === "" ||
      user.email === "" ||
      user.password1 === "" ||
      user.password2 === ""
    ) {
      alert("Please enter all the fields...");
      return;
    }

    if (allUsers.filter((u) => u.email == user.email).length > 0) {
      alert("This email is already registered, Try with the new one...");
      return;
    }

    if (user.password1 !== user.password2) {
      alert("Passwords aren't matching, Please enter again...");
      return;
    }

    if (!/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(user.email)) {
      alert("Please enter a valid email address...");
      return;
    }

    Dispatch(
      registerAPI({
        name: user.name,
        email: user.email,
        password: user.password1,
      })
    );
    Navigate("/login");
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-1/4 border-secondary border-4 rounded-md mx-auto  px-2 py-5  "
      >
        <div className="w-full flex justify-center">
          <h1 className="text-xl font-bold text-black underline border-4 border-secondary hover:bg-secondary px-2 py-1 rounded-full hover:text-white">
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
            name="password1"
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
            name="password2"
            value={user.password2}
            onChange={inputChangeHandler}
            className="bg-zinc-200 px-2"
          />
        </div>

        <div className="flex items-center justify-center mt-4">
          <button className="hover:bg-secondary hover:text-white active:scale-110 rounded-lg px-3 py-2 border-2 border-primary text-xl font-bold">
            Register
          </button>
        </div>
      </form>
      <Link
        to="/login"
        className="text-primary text-sm font-semibold hover:text-black hover:underline hover"
      >
        Already have an account ? Login then...
      </Link>
    </div>
  );
};

export default Register_Form;
