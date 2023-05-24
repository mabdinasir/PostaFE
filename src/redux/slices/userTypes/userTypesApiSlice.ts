import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import UserType from "../../../models/users/UserType";
import { userTypesApi } from "../../config/endpoint";

type GetUserTypesResponse = {
  success: boolean;
  count: number;
  userTypes: UserType[];
};

export const userTypesApiSlice = createApi({
  reducerPath: "userTypesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: userTypesApi,
  }),
  tagTypes: ["userTypes"],

  endpoints: (builder) => ({
    getUserTypes: builder.query<GetUserTypesResponse, void>({
      query: () => ({
        url: "/",
        method: "Get",
      }),
    }),
  }),
});

export const { useGetUserTypesQuery } = userTypesApiSlice;
