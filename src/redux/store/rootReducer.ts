import { combineReducers } from "@reduxjs/toolkit";
import { authApiSlice } from "../slices/auth/authApiSlice";

export const rootReducer = combineReducers({
  [authApiSlice.reducerPath]: authApiSlice.reducer,
});
