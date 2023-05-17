import User from "../users/User";

export interface SignInResponse {
  success: boolean;
  message: string;
  user?: User | null;
  jwt?: string | null;
}
