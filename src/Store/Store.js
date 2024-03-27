import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Reducers/UserReducer";
import ProductReducer from "./Reducers/ProductReducer";

export const store = configureStore({
  reducer: {
    allUsers: UserReducer,
    allProducts: ProductReducer,
  },
});
