// import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSingleProduct } from "../Store/Reducers/ProductReducer";
import { useEffect, useState } from "react";
import { getFilteredProductsAPI } from "../Api/Auth";

const AsideSection = () => {
  const Dispatch = useDispatch();
  const Navigate = useNavigate();
  const { allProducts, category } = useSelector((state) => state.allProducts);

  const [products, setProducts] = useState(allProducts);

  useEffect(() => {
    if (category !== "") {
      Dispatch(getFilteredProductsAPI(category)).then((res) =>
        setProducts(res.payload)
      );
    } else {
      setProducts(allProducts);
    }
  }, [category, allProducts]);

  return (
    <div className="w-full bg-purple-100 overflow-x-hidden overflow-y-auto flex flex-wrap justify-center items-center gap-2 p-10 mb-20">
      {products &&
        products.map((pr, ind) => {
          return (
            <button
              onClick={() => {
                Dispatch(setSingleProduct(pr));
                Navigate(`/details/${pr.id}`);
              }}
              key={ind}
              className="inline-block w-40 h-40 bg-white overflow-hidden p-5 rounded-lg shadow-xl mr-2 mb-2"
            >
              <div className="h-3/4 hover:scale-110">
                <img
                  className="h-full w-full object-contain"
                  src={`${pr.image}`}
                  alt="product-img"
                />
              </div>
              <h2 className="text-center text-md tracking-tight hover:text-purple-300">
                {pr.title}
              </h2>
            </button>
          );
        })}
    </div>
  );
};

export default AsideSection;
