interface UserType {
  id: string;
  name: string;
  createdAt?: Date | string;
  createdBy?: string;
  updatedAt: Date | string;
  updatedBy?: string;
  users?: UserType[];
}

export default UserType;
