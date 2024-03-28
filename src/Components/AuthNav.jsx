// import React from 'react'

import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <nav className="w-full h-20  bg-secondary flex justify-between items-center px-5">
      <div className="image-container hover:scale-110 w-30 h-10 rounded-md overflow-hidden">
        <img
          src="https://www.shutterstock.com/image-vector/shopping-logo-ecommerce-logotype-shooping-260nw-1978607771.jpg"
          alt="logo"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="nav-content w-[25%]">
        <ul className="flex justify-between h-10">
          <NavLink
            to="/"
            className={(e) =>
              `rounded-lg border-2 hover:border-white  border-black px-3  text-xl font-semibold text-black hover:text-white hover:underline hover:underline-offset-2 ${
                e.isActive && "border-white text-white shadow-lg "
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={(e) =>
              `rounded-lg border-2 hover:border-white  border-black px-3  text-xl font-semibold text-black hover:text-white hover:underline hover:underline-offset-2 ${
                e.isActive && "border-white text-white shadow-lg "
              }`
            }
          >
            Account
          </NavLink>
          <NavLink
            to="/logout"
            className={(e) =>
              `rounded-lg border-2 hover:border-white  border-black px-3  text-xl font-semibold text-black hover:text-white hover:underline hover:underline-offset-2 ${
                e.isActive && "border-white text-white shadow-lg "
              }`
            }
          >
            Logout
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default AuthNav;
