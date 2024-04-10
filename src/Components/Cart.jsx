// import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { FaStarHalfAlt } from "react-icons/fa";
import {
  decrementProduct,
  incrementProduct,
  refreshProductCount,
  refreshSingleProduct,
  setAllProducts,
} from "../Store/Reducers/ProductReducer";
import { useEffect, useState } from "react";

const Cart = () => {
  const { id } = useParams();
  const Dispatch = useDispatch();
  const Navigate = useNavigate();
  const [count, setCount] = useState(1);
  const { singleProduct } = useSelector((state) => state.allProducts);
  useEffect(() => {
    if (Object.keys(singleProduct).length === 0) {
      Dispatch(setAllProducts());
      Dispatch(refreshSingleProduct(id));
      Dispatch(refreshProductCount(id));
    }
  }, [singleProduct]);
  // console.log(singleProduct);

  return (
    <div className="w-full h-full bg-purple-100 p-10 pb-32 overflow-y-scroll">
      <button
        className="px-5 py-2 rounded-3xl bg-secondary text-white font-semibold text-xl hover:scale-110 duration-200"
        onClick={() => Navigate(-1)}
      >
        Back
      </button>
      <div className="rounded-full h-auto w-3/4 m-auto bg-white flex flex-col items-center justify-center shadow-2xl p-6 overflow-x-hidden ">
        <h1 className="text-xl text-center w-4/6 font-bold text-primary mt-10">
          {singleProduct?.title}
        </h1>
        <div className="w-52 h-52 bg-white">
          <img
            className="object-contain h-full w-full"
            src={`${singleProduct?.image}`}
            alt="product-image"
          />
        </div>
        <h2 className="text-lg font-semibold ">
          Price: ${singleProduct?.price}
        </h2>
        <h3 className="text-sm font-semibold ">{singleProduct?.category}</h3>
        <h4 className="w-72 text-center">
          Description: {singleProduct?.description}
        </h4>

        <div className="m-3">
          <button
            onClick={() => {
              if (count > 0) {
                setCount((count) => count - 1);
                Dispatch(incrementProduct(singleProduct.id));
              }
            }}
            className="px-3 py-1 w-12 rounded-3xl bg-secondary text-white font-semibold text-xl hover:scale-110 duration-200"
          >
            -
          </button>
          <input
            type="number"
            name="number"
            value={count}
            onChange={() => {}}
            className="border-4 border-black w-12 m-2 text-center appearance-none bg-transparent focus:outline-none"
          />
          <button
            onClick={() => {
              if (count < singleProduct.rating.count + count) {
                setCount((count) => count + 1);
                Dispatch(decrementProduct(singleProduct.id));
              }
            }}
            className="px-3 py-1 w-12 rounded-3xl bg-secondary text-white font-semibold text-xl hover:scale-110 duration-200"
          >
            +
          </button>
        </div>

        <div className="w-72 flex justify-between mt-5">
          <span className="flex items-center gap-1 text-lg font-semibold text-primary">
            Rating: {singleProduct?.rating?.rate} <FaStarHalfAlt />
          </span>
          <span className="text-lg font-semibold text-primary">
            Count: {singleProduct?.rating?.count}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
