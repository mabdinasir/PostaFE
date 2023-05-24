import { GridColDef } from "@mui/x-data-grid";
import { FC } from "react";
import Container from "../../../components/Container";
import Header from "../../../components/Header/Header";
import DataGridReader from "../../../components/Lists/DataGridreader";
import User from "../../../models/users/User";
import { useGetUsersQuery } from "../../../redux/slices/users/usersApiSlice";

type UsersProps = {
  //
};

const UsersList: FC<UsersProps> = () => {
  const { data, isSuccess, isLoading } = useGetUsersQuery();
  const rows = isSuccess ? data?.users : [];

  const columns: GridColDef<User>[] = [
    { field: "firstName", headerName: "First name", flex: 1 },
    { field: "lastName", headerName: "Last name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "isSignedIn", headerName: "is Signed In?", flex: 1 },
    { field: "isDeleted", headerName: "is Deleted?", flex: 1 },
    { field: "createdAt", headerName: "Created At", flex: 1 },
    { field: "updatedAt", headerName: "Updated At", flex: 1 },
    { field: "userTypeId", headerName: "User Type", flex: 1 },
  ];

  return (
    <>
      <Header title="Users" />
      <Container>
        <DataGridReader
          loading={isLoading}
          columns={columns}
          rows={rows}
          getRowId={(row) => row.id}
        />
      </Container>
    </>
  );
};

export default UsersList;
