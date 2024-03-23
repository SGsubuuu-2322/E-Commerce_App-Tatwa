// import React from 'react'

import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Login_Form = () => {
  const Navigate = useNavigate();
  const { allUsers } = useSelector((state) => state.allUsers);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const inputChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(allUsers);
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (allUsers.length != 0) {
      const validUser = allUsers.filter((u) => u.email == user.username)[0];
      if (validUser) {
        if (validUser.password == user.password) {
          if (loggedInUser) {
            localStorage.removeItem("loggedInUser");
            localStorage.setItem("loggedInUser", JSON.stringify(validUser));
          } else {
            localStorage.setItem("loggedInUser", JSON.stringify(validUser));
          }
          Navigate("/");
        } else {
          alert("Please enter a valid username and password1");
          return;
        }
      } else {
        alert("Please enter a valid username and password2");
        return;
      }
    } else {
      alert("Please register yourself first...");
      Navigate("/register");
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-1/4 border-secondary border-4 rounded-md mx-auto px-2 py-5 "
      >
        <div className="w-full flex justify-center">
          <h1 className="text-xl font-bold text-black underline border-4 border-secondary hover:bg-secondary px-2 py-1 rounded-full hover:text-white">
            Login-Form
          </h1>
        </div>
        <div className="input-container flex flex-col">
          <label htmlFor="name" className="text-xl font-bold text-black">
            Username:{" "}
          </label>
          <input
            type="email"
            placeholder="Enter your email..."
            name="username"
            value={user.username}
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
