import { createSlice } from "@reduxjs/toolkit";
import { getProductsAPI } from "../../Api/Auth";

const initialState = {
  allProducts: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsAPI.fulfilled, (state, action) => {
      //   console.log(action.payload);
      state.allProducts = [...state.allProducts, action.payload];
      localStorage.setItem("allProducts", JSON.stringify(state.allProducts));
    });
  },
});
