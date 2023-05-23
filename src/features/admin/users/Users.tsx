import { FC } from "react";
import DataGridReader from "../../../components/Lists/DataGridreader";
import { useGetUsersQuery } from "../../../redux/slices/users/usersApiSlice";

type UsersProps = {
  //
};

const Users: FC<UsersProps> = () => {
  const { data, error, isSuccess, isLoading } = useGetUsersQuery();
  const rows = isSuccess ? data?.users : [];
  console.log(rows);

  return (
    <div>
      <DataGridReader
        checkboxSelection
        loading={isLoading}
        columns={[
          { field: "firstName", headerName: "First name", width: 130 },
          { field: "lastName", headerName: "Last name", width: 130 },
          { field: "email", headerName: "Email", width: 130 },
          { field: "isSignedIn", headerName: "is Signed In?", width: 130 },
          { field: "isDeleted", headerName: "is Deleted?", width: 130 },
        ]}
        rows={rows}
        getRowId={(row) => row.id}
      />
    </div>
  );
};

export default Users;
