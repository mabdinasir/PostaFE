import User from "../users/User";

export type SignInRequest = Pick<User, "email" | "password">;
