// import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { refreshUserType } from "../Store/Reducers/UserReducer";

const PublicNav = () => {
  const Dispatch = useDispatch();
  const { userType } = useSelector((state) => state.allUsers);
  const { pathname } = useLocation();
  console.log(userType);
  const handleOptionChange = (e) => {
    Dispatch(refreshUserType(e.target.value));
  };
  return (
    <nav className="w-full h-20 bg-secondary flex justify-between items-center px-5">
      <div className="image-container hover:scale-110 w-30 h-10 rounded-md overflow-hidden">
        <img
          src="https://www.shutterstock.com/image-vector/shopping-logo-ecommerce-logotype-shooping-260nw-1978607771.jpg"
          alt="logo"
          className="w-full h-full object-contain"
        />
      </div>

      {pathname === "/register" ? (
        <div className="button-holder h-[90%] w-40 bg-secondarylite rounded-md flex justify-around items-center  border-2 overflow-hidden">
          <div className="admin-container h-20 w-10 flex flex-col justify-center gap-1">
            <div className="image h-10 w-10 overflow-hidden rounded-md">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzL-2or6Cs8zzzYy5KMbQsBciYR5eqfW-xcdZzJZVLRQ&s"
                alt="admin-image"
                className="object-cover bg-white"
              />
            </div>
            {/* This radio input is checked after changing of state value from central redux store */}
            <input
              type="radio"
              name="seller"
              value="S"
              onChange={handleOptionChange}
              checked={userType === "S"}
            />
          </div>
          <div className="admin-container h-20 w-10 flex flex-col justify-center gap-1">
            <div className="image h-10 w-10 overflow-hidden rounded-md">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRXrcj67rMY8zfaGCVvT4ofKX8o8z80ik-IXKAIyAEfQ&s"
                alt="admin-image"
                className="object-cover "
              />
            </div>
            <input
              type="radio"
              name="buyer"
              value="B"
              onChange={handleOptionChange}
              checked={userType === "B"}
            />
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="nav-content w-48">
        <ul className="flex justify-between h-10">
          <NavLink
            to="/login"
            className={(e) =>
              `rounded-lg border-2 hover:border-white  border-black px-3  text-xl font-semibold text-black hover:text-white hover:underline hover:underline-offset-2 ${
                e.isActive && "border-white text-white shadow-lg "
              }`
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className={(e) =>
              `rounded-lg border-2 hover:border-white  border-black px-3  text-xl font-semibold text-black hover:text-white hover:underline hover:underline-offset-2 ${
                e.isActive && "border-white text-white shadow-lg "
              }`
            }
          >
            Register
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default PublicNav;
