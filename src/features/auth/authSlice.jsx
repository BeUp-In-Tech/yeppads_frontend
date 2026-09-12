import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const getUserFromCookie = () => {
  try {
    const user = Cookies.get('user');
    return user ? JSON.parse(user) : null;
  } catch (error) {
    return null;
  }
};

const initialState = {
  user: getUserFromCookie(),
  isAuthenticated: !!getUserFromCookie() && !!Cookies.get("accessToken"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      Cookies.set('user', JSON.stringify(action.payload), { expires: 30, secure: false, sameSite: "Strict" });
    },
    userLoggedOut: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      Cookies.remove('user');
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
