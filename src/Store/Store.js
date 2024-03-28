import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Reducers/UserReducer";
import { productSlice } from "./Reducers/ProductReducer";

export const store = configureStore({
  reducer: {
    allUsers: UserReducer,
    allProducts: productSlice.reducer,
  },
});
