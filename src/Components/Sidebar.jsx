// import React from 'react'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAPI } from "../Api/Auth";
import { NavLink } from "react-router-dom";
import { tailwindBorderColors } from "../Config";

const Sidebar = () => {
  const Dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.allProducts);
  const [categories, setCategories] = useState([]);

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
          Add a product
        </div>
        <hr className="mb-3 border-black w-full" />
        <div className="sidebar-list flex flex-col">
          {categories.map((category, i) => {
            return (
              <NavLink
                key={i}
                to={`/?category=${category}`}
                //   style={{ borderColor: getRandomColor() }}
                className={(e) =>
                  `flex items-center gap-x-2 rounded-lg border-2 hover:border-secondary px-3 py-2  text-sm font-semibold text-black hover:underline hover:underline-offset-2 mb-4 ${
                    tailwindBorderColors[
                      Math.floor(Math.random() * tailwindBorderColors.length)
                    ]
                  } ${e.isActive || "border-secondary"}`
                }
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
