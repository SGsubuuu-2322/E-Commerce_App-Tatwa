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
  category: "",
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setAllProducts: (state) => {
      return {
        ...state,
        allProducts: JSON.parse(localStorage.getItem("allProducts")),
      };
    },
    setSingleProduct: (state, action) => {
      return { ...state, singleProduct: action.payload };
    },

    refreshSingleProduct: (state, action) => {
      const product = state.allProducts.find((p) => p.id == action.payload);
      const temp = { ...product };
      temp.rating = {
        ...temp.rating,
        count: +JSON.parse(localStorage.getItem("productCount")) - 1,
      };

      // console.log(temp);
      return {
        ...state,
        singleProduct: temp,
      };
    },

    refreshProductCount: (state, action) => {
      const prdInd = state.allProducts.findIndex((p) => action.payload == p.id);
      state.allProducts[prdInd].rating.count =
        +JSON.parse(localStorage.getItem("productCount")) - 1;
      localStorage.setItem("allProducts", JSON.stringify(state.allProducts));
    },

    refreshCategory: (state, action) => {
      return { ...state, category: action.payload };
    },

    decrementProduct: (state, action) => {
      const prdInd = state.allProducts.findIndex((p) => action.payload == p.id);
      --state.allProducts[prdInd].rating.count;
      state.singleProduct = state.allProducts[prdInd];
      localStorage.setItem("allProducts", JSON.stringify(state.allProducts));
    },
    incrementProduct: (state, action) => {
      // console.log(action.payload);
      const prdInd = state.allProducts.findIndex((p) => action.payload == p.id);
      ++state.allProducts[prdInd].rating.count;
      state.singleProduct = state.allProducts[prdInd];
      localStorage.setItem("allProducts", JSON.stringify(state.allProducts));
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
export const {
  setAllProducts,
  setSingleProduct,
  refreshSingleProduct,
  refreshProductCount,
  refreshCategory,
  decrementProduct,
  incrementProduct,
} = productSlice.actions;
