// import React from 'react'
import { useEffect } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleProductAPI } from "../Api/Auth";

const ProductComponent = () => {
  const Navigate = useNavigate();
  const Dispatch = useDispatch();
  const { id } = useParams();
  const { singleProduct } = useSelector((state) => state.allProducts);

  useEffect(() => {
    if (Object.keys(singleProduct).length === 0) {
      Dispatch(getSingleProductAPI(id));
    }
  }, []);

  const handleCart = () => {
    Navigate("/cart");
  }

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
          <button onClick={handleCart} className="px-5 py-2 rounded-3xl bg-secondary text-white font-semibold text-xl hover:scale-110 duration-200">
            Add To Cart
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

export default ProductComponent;
