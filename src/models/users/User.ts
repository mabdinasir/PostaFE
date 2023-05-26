import UserType from "./UserType";

interface User {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  isGoogleAuth: boolean;
  isEmailVerified: boolean;
  isDeleted: boolean;
  isSignedIn: boolean;
  createdAt: Date | string;
  createdBy?: string | null;
  updatedAt: Date | string;
  updatedBy?: string | null;
  userTypes?: UserType[];
}

export default User;
