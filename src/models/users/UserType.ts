import User from "./User";

interface UserType {
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  updatedBy: string;
  User: User[];
}

export default UserType;
