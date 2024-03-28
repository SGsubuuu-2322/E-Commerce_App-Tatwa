// import React from 'react'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAPI } from "../Api/Auth";
import { NavLink } from "react-router-dom";
import { tailwindBorderColors } from "../Config";

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

  //   console.log(distinctCategory);
  return (
    <div className="w-72 flex flex-col">
      <div className="sidebar-content h-full p-6">
        <div className="sidebar-header border-4 border-secondary rounded-md flex justify-center items-center text-md text-black font-bold mb-1">
          Add a product
        </div>
        <hr className="mb-3 border-black w-full" />
        <div className="sidebar-list flex flex-col">
          {distinctCategory.map((category, i) => {
            return (
              <NavLink
                key={i}
                to={`/${category}`}
                //   style={{ borderColor: getRandomColor() }}
                className={`flex items-center gap-x-2 rounded-lg border-2 hover:border-secondary px-3 py-2  text-sm font-semibold text-black hover:underline hover:underline-offset-2 mb-4 ${
                  tailwindBorderColors[
                    Math.floor(Math.random() * tailwindBorderColors.length)
                  ]
                }`}
              >
                <div
                  //   style={{ backgroundColor: getRandomColor() }}
                  className="w-4 h-4 rounded-full"
                />
                {category}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
