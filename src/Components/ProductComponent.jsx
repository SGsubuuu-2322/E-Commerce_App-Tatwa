// import React from 'react'
import { useEffect } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProductAPI } from "../Api/Auth";

const ProductComponent = () => {
  const Dispatch = useDispatch();
  const { id } = useParams();
  const { singleProduct } = useSelector((state) => state.allProducts);

  useEffect(() => {
    if (Object.keys(singleProduct).length === 0) {
      Dispatch(getSingleProductAPI(id));
    }
    /*
        call the product by id API and store it in single Product
     */
  }, []);

  return (
    <div className="w-full h-full bg-purple-200 p-10 pb-32">
      <div className="rounded-full h-full w-3/4 m-auto bg-white flex flex-col items-center justify-center shadow-2xl p-6 overflow-hidden">
        <h1 className="text-2xl font-bold text-primary">
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
