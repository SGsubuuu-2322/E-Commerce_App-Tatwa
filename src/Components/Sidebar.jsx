// import React from 'react'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAPI } from "../Api/Auth";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const Dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.allProducts);

  useEffect(() => {
    Dispatch(getProductsAPI());
  }, []);

  const products = allProducts[0];

  const categories =
    products && products.reduce((acc, curr) => [...acc, curr.category], []);

  const distinctCategory = [...new Set(categories)];

  const getRandomColor = () => {
    return `rgba(${(Math.random() * 255).toFixed()}, ${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()}, 0.5)`;
  };

  //   console.log(distinctCategory);
  return (
    <div className="sidebar w-[15%]">
      <div className="sidebar-content h-full p-6">
        <div className="sidebar-header border-4 border-secondary rounded-md flex justify-center items-center text-md text-black font-bold mb-1">
          Add a product
        </div>
        <hr className="mb-3 border-black w-full" />
        <div className="sidebar-list flex flex-col">
          {distinctCategory.map((category, id) => (
            <NavLink
              key={id}
              to={`/${category}`}
              style={{ borderColor: getRandomColor() }}
              className={(e) =>
                ` flex items-center gap-x-2 rounded-lg border-2 px-3 py-2  text-sm font-semibold text-black hover:underline hover:underline-offset-2 mb-4 ${
                  e.isActive &&
                  "border-black text-primary font-semibold shadow-lg"
                }`
              }
            >
              <div
                style={{ backgroundColor: getRandomColor() }}
                className="w-4 h-4 rounded-full"
              />
              {category}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
