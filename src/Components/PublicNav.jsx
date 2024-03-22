// import React from 'react'

import { NavLink } from "react-router-dom";

const PublicNav = () => {
  return (
    <nav className="w-full h-20 bg-secondary flex justify-between items-center px-5">
      <div className="image-container hover:scale-110 w-30 h-10 rounded-md overflow-hidden">
        <img
          src="https://www.shutterstock.com/image-vector/shopping-logo-ecommerce-logotype-shooping-260nw-1978607771.jpg"
          alt="logo"
          className="w-full h-full object-contain"
        />
      </div>

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
