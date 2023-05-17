import User from "../users/User";

export type SignUpRequest = Pick<
  User,
  "email" | "password" | "firstName" | "lastName"
>;
