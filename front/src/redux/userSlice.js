import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    login(state, action) {
      return action.payload;
    },
    logout(state, action) {
      return null;
    },
    register(state, action) {
      return action.payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const { login, logout, register } = actions;
export default reducer;
