import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../Config";

export const registerAPI = createAsyncThunk("user-register", async (body) => {
  const response = await axios.post(`${API_URL}/users`, body);
  return response.data;
});
