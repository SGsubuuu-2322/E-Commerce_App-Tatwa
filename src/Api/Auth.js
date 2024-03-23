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
export const loginAPI = createAsyncThunk("user-login", async (body) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, body);
    console.log(response.data);
    return { ...response.data, ...body };
  } catch (err) {
    console.log(err.response);
  }
});
