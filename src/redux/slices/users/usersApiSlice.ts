import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import User from "../../../models/users/User";
import { userApi } from "../../config/endpoint";

type GetUsersResponse = {
  success: boolean;
  count: number;
  users: User[];
};

export const usersApiSlice = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: userApi,
  }),
  tagTypes: ["users"],

  endpoints: (builder) => ({
    getUsers: builder.query<GetUsersResponse, void>({
      query: () => ({
        url: "/",
        method: "Get",
      }),
    }),
  }),
});

export const { useGetUsersQuery } = usersApiSlice;
