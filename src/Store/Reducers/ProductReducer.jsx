import { createSlice } from "@reduxjs/toolkit";
import {
  getFilteredProductsAPI,
  getProductsAPI,
  getSingleProductAPI,
} from "../../Api/Auth";

const initialState = {
  allProducts: [],
  singleProduct: {},
  filteredProducts: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSingleProduct: (state, action) => {
      return { ...state, singleProduct: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsAPI.fulfilled, (state, action) => {
      state.allProducts = [...state.allProducts, ...action.payload];
      localStorage.setItem("allProducts", JSON.stringify(state.allProducts));
    });
    builder.addCase(getSingleProductAPI.fulfilled, (state, action) => {
      // console.log("From product Reducer--------", action.payload);
      return {
        ...state,
        singleProduct: action.payload,
      };
    });
    builder.addCase(getFilteredProductsAPI.fulfilled, (state, action) => {
      // console.log("From product Reducer--------", action.payload);
      return {
        ...state,
        filteredProducts: action.payload,
      };
    });
  },
});
export const { setSingleProduct } = productSlice.actions;
