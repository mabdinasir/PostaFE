import { authApiSlice } from "../slices/auth/authApiSlice";
import { usersApiSlice } from "../slices/users/usersApiSlice";

export const middlewareArray = [
  authApiSlice.middleware,
  usersApiSlice.middleware,
];
