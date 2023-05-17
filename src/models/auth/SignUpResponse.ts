import User from "../users/User";

export type SignUpResponse = {
  success: boolean;
  message: string;
  user?: User | null;
  jwt?: string | null;
};
