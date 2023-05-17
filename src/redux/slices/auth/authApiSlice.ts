import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { SignInResponse } from "../../../models/auth/SignInReponse";
import { SignInRequest } from "../../../models/auth/SignInRequest";
import { SignUpRequest } from "../../../models/auth/SignUpRequest";
import { SignUpResponse } from "../../../models/auth/SignUpResponse";
import { authApi } from "../../config/endpoint";

export const authApiSlice = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: authApi,
  }),
  tagTypes: ["authentication"],

  endpoints: (builder) => ({
    signUp: builder.mutation<SignUpResponse, SignUpRequest>({
      query: (credentials) => ({
        url: "/signup",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: [{ type: "authentication", id: "signUp" }],
    }),
    signIn: builder.mutation<SignInResponse, SignInRequest>({
      query: (credentials) => ({
        url: "/signin",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: [{ type: "authentication", id: "signIn" }],
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = authApiSlice;
