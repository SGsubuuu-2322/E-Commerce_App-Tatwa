// import React from 'react'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAPI } from "../Api/Auth";
// import { NavLink } from "react-router-dom";
import { tailwindBackgroundColors, tailwindBorderColors } from "../Config";
import { refreshCategory } from "../Store/Reducers/ProductReducer";

const Sidebar = () => {
  const Dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.allProducts);
  const { loggedInUser } = useSelector((state) => state.allUsers);
  const [categories, setCategories] = useState([]);

  const handleClick = (category) => {
    Dispatch(refreshCategory(category));
  };

  const handleAllProduct = () => {
    Dispatch(refreshCategory(""));
    Dispatch(getProductsAPI());
  };
  // console.log(category);

  useEffect(() => {
    if (allProducts.length > 0) {
      setCategories([
        ...new Set(
          allProducts.reduce((acc, curr) => [...acc, curr.category], [])
        ),
      ]);
    } else {
      Dispatch(getProductsAPI());
    }
  }, [allProducts]);

  //   console.log(distinctCategory);
  return (
    <div className="w-72 flex flex-col">
      <div className="sidebar-content h-full p-6">
        <div className="sidebar-header border-4 border-secondary rounded-md flex justify-center items-center text-md text-black font-bold mb-1">
          {loggedInUser.userType == "B" ? "Go to cart" : "Add a product"}
        </div>
        <hr className="mb-3 border-black w-full" />
        <div className="sidebar-list flex flex-col">
          {categories.length > 0 && (
            <button
              onClick={handleAllProduct}
              // key={i}
              // to={`/?category=${category}`}
              //   style={{ borderColor: getRandomColor() }}
              className={`flex items-center gap-x-2 rounded-lg border-2 hover:border-secondary px-3 py-2  text-sm font-semibold text-black hover:underline hover:underline-offset-2 mb-4 ${
                tailwindBorderColors[
                  Math.floor(Math.random() * tailwindBorderColors.length)
                ]
              }`}
            >
              <div
                //   style={{ backgroundColor: getRandomColor() }}
                className={`w-4 h-4 rounded-full  ${
                  tailwindBackgroundColors[
                    Math.floor(Math.random() * tailwindBackgroundColors.length)
                  ]
                }`}
              ></div>
              All Products
            </button>
          )}
          {categories.map((category, i) => {
            return (
              <button
                onClick={() => handleClick(category)}
                key={i}
                // to={`/?category=${category}`}
                //   style={{ borderColor: getRandomColor() }}
                className={`flex items-center gap-x-2 rounded-lg border-2 hover:border-secondary px-3 py-2  text-sm font-semibold text-black hover:underline hover:underline-offset-2 mb-4 ${
                  tailwindBorderColors[
                    Math.floor(Math.random() * tailwindBorderColors.length)
                  ]
                }`}
              >
                <div
                  //   style={{ backgroundColor: getRandomColor() }}
                  className={`w-4 h-4 rounded-full  ${
                    tailwindBackgroundColors[
                      Math.floor(
                        Math.random() * tailwindBackgroundColors.length
                      )
                    ]
                  }`}
                ></div>
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
