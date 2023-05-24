import { authApiSlice } from "../slices/auth/authApiSlice";
import { userTypesApiSlice } from "../slices/userTypes/userTypesApiSlice";
import { usersApiSlice } from "../slices/users/usersApiSlice";

export const middlewareArray = [
  authApiSlice.middleware,
  usersApiSlice.middleware,
  userTypesApiSlice.middleware,
];
