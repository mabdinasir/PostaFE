import User from "../users/User";

export interface IDecodedJwt extends User {
  expiresIn: number;
}
