// import React from 'react'

import { Link } from "react-router-dom";

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
          <Link
            to="/login"
            className="rounded-lg border border-2 hover:border-white  border-black px-3  text-xl font-semibold text-black hover:text-white hover:underline hover:underline-offset-2"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="rounded-lg border border-2 hover:border-white  border-black px-3 text-xl font-semibold text-black hover:text-white hover:underline hover:underline-offset-2"
          >
            Register
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default PublicNav;
