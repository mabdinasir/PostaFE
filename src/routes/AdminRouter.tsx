import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../features/admin/Admin";
import UserTypesList from "../features/admin/users/UserTypesList";
import UsersList from "../features/admin/users/UsersList";
import { UserTypes } from "../helpers/configs/userTypeEnum";
import useCurrentUser from "../helpers/customHooks/useCurrentUser";
import ErrorPage from "./Error";

const AdminRouter: FC = () => {
  const currentUser = useCurrentUser();
  const isAuthenticated = currentUser?.isSignedIn;
  const isAdmin = currentUser?.userTypeId === UserTypes.Admin;

  return (
    <Routes>
      {isAuthenticated && isAdmin && (
        <>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/*users" element={<UsersList />} />
          <Route path="/admin/*userTypes" element={<UserTypesList />} />
        </>
      )}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AdminRouter;
