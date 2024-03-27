import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../Config";

export const registerAPI = createAsyncThunk("user-register", async (body) => {
  try {
    const response = await axios.post(`${API_URL}/users`, body);
    return { ...response.data, ...body };
  } catch (err) {
    console.log(err.response);
  }
});
export const getProductsAPI = createAsyncThunk("all-products", async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    // console.log("Response from API---", response.data);
    return response.data;
  } catch (err) {
    console.log(err.response);
  }
});
