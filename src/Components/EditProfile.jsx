// import React from 'react'

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { refreshLoggedInUser, updateUser } from "../Store/Reducers/UserReducer";

const EditProfile = () => {
  const Dispatch = useDispatch();
  const Navigate = useNavigate();
  const { loggedInUser } = useSelector((state) => state.allUsers);
  const [user, setUser] = useState({
    name: loggedInUser.name,
    id: loggedInUser.id,
    email: loggedInUser.email,
    password: loggedInUser.password,
    userType: loggedInUser.userType,
    profileImg: loggedInUser.profileImg,
  });

  const inputChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      user.name.trim() < 5 ||
      user.profileImg.trim() < 5 ||
      user.userType.trim() < 5 ||
      user.password.trim() < 1 ||
      user.email.trim() < 5
    ) {
      alert("Each and every field must have 4 characters...");
      return;
    }

    Dispatch(updateUser(user));
    Dispatch(refreshLoggedInUser());
    Navigate(-1);
  };

  return (
    <div className="w-full bg-white p-10 pb-20 overflow-y-auto">
      <div className="w-3/4 h-5/6 bg-purple-100 rounded-full m-auto flex flex-col justify-start items-center p-10 shadow-2xl">
        <form
          onSubmit={handleFormSubmit}
          className="w-2/4 border-secondary border-4 rounded-3xl mx-auto  px-2 py-5  "
        >
          <div className="w-full flex justify-center">
            <h1 className="text-xl font-bold text-black underline border-4 border-secondary hover:bg-secondary px-2 py-1 rounded-full hover:text-white">
              Profile-Updation Form
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
              Profile-Img:{" "}
            </label>
            <input
              type="text"
              placeholder="Re-enter your password..."
              name="profileImg"
              value={user.profileImg}
              onChange={inputChangeHandler}
              className="bg-zinc-200 px-2"
            />
          </div>
          <div className="input-container flex flex-col">
            <label htmlFor="name" className="text-xl font-bold text-black">
              User-Type:{" "}
            </label>
            <select
              className="bg-zinc-200 px-2"
              onChange={inputChangeHandler}
              name="userType"
            >
              <option value="B">Buyer</option>
              <option value="S">Seller</option>
            </select>
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
            <button className="bg-secondary text-white active:scale-110 rounded-3xl hover:bg-white hover:text-black px-3 py-2 border-2 border-secondary text-xl font-bold">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
