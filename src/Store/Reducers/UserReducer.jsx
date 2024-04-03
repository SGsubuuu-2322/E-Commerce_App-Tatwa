import { createSlice } from "@reduxjs/toolkit";
import { registerAPI } from "../../Api/Auth";
import { nanoid } from "nanoid";

const initialState = {
  allUsers: JSON.parse(localStorage.getItem("allUsers")) || [],
  loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")) || [],
  userType: "B",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUser: (state, action) => {
      state.allUsers = state.allUsers.filter(
        (user) => user.email !== action.payload.email
      );
      localStorage.setItem("allUsers", JSON.stringify(state.allUsers));
      localStorage.removeItem("loggedInUser"); // console.log(state.allUsers);
    },
    refreshAllUsers: (state) => {
      state.allUsers = JSON.parse(localStorage.getItem("allUsers"));
    },
    refreshUserType: (state, action) => {
      state.userType = action.payload;
    },
    refreshLoggedInUser: (state) => {
      state.loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerAPI.fulfilled, (state, action) => {
      // console.log(action.payload);
      action.payload.id = nanoid();
      state.allUsers = [
        ...state.allUsers,
        action.payload,
        // (action.payload.id = nanoid()),
      ];
      localStorage.setItem("allUsers", JSON.stringify(state.allUsers));
    });
  },
});

export default userSlice.reducer;
export const {
  refreshLoggedInUser,
  refreshAllUsers,
  refreshUserType,
  deleteUser,
} = userSlice.actions;
