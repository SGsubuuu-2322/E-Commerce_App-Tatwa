// import React from 'react'

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AsideSection = () => {
  const { allProducts } = useSelector((state) => state.allProducts);
  return (
    <div className=" w-full bg-purple-100 p-10 overflow-x-hidden overflow-y-auto">
      {
        <Link className=" w-20 h-20 border-2 bg-blue-200">
          <div className=" h bg-red-200">
            <img
              className="object-contain "
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              alt="product-image"
            />
          </div>
          <h1>Product Name</h1>
        </Link>
      }
    </div>
  );
};

export default AsideSection;
