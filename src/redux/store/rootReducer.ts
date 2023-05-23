import { combineReducers } from "@reduxjs/toolkit";
import { authApiSlice } from "../slices/auth/authApiSlice";
import { usersApiSlice } from "../slices/users/usersApiSlice";

export const rootReducer = combineReducers({
  [authApiSlice.reducerPath]: authApiSlice.reducer,
  [usersApiSlice.reducerPath]: usersApiSlice.reducer,
});
