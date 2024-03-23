import { createSlice } from "@reduxjs/toolkit";
import { registerAPI } from "../../Api/Auth";

const initialState = {
  allUsers: JSON.parse(localStorage.getItem("allUsers")) || [],
  loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")) || [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerAPI.fulfilled, (state, action) => {
      // console.log("From Reducer--------", action.payload);
      state.allUsers = [...state.allUsers, action.payload];
      localStorage.setItem("allUsers", JSON.stringify(state.allUsers));
    });
  },
});

export default userSlice.reducer;
