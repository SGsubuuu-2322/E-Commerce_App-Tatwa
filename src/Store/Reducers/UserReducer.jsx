import { createSlice } from "@reduxjs/toolkit";
import { registerAPI } from "../../Api/Auth";

const initialState = {
  allUsers: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerAPI.fulfilled, (state, action) => {
      state.allUsers = action.payload;
    });
  },
});

export default userSlice.reducer;
