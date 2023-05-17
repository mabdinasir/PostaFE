import User from "../users/User";

export type SignUpFormFields = Pick<
  User,
  "email" | "password" | "firstName" | "lastName"
>;
