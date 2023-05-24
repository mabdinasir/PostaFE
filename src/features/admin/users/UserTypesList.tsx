import { GridColDef } from "@mui/x-data-grid";
import { FC } from "react";
import Container from "../../../components/Container";
import Header from "../../../components/Header/Header";
import DataGridReader from "../../../components/Lists/DataGridreader";
import {
  DateFormatVariants,
  useDateFormat,
} from "../../../helpers/customHooks/useDateFormat";
import UserType from "../../../models/users/UserType";
import { useGetUserTypesQuery } from "../../../redux/slices/userTypes/userTypesApiSlice";

type UsersProps = {
  //
};

const UserTypesList: FC<UsersProps> = () => {
  const { data, isSuccess, isLoading } = useGetUserTypesQuery();
  const rows = isSuccess ? data?.userTypes : [];
  const formatDate = useDateFormat();

  const columns: GridColDef<UserType>[] = [
    { field: "id", headerName: "User Type ID", flex: 1 },
    { field: "type", headerName: "User Type", flex: 1 },
    {
      field: "User",
      headerName: "Users",
      flex: 1,
      valueGetter: (params) => params.row.User.length,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      flex: 1,
      valueFormatter: (params) =>
        formatDate(params.value, DateFormatVariants.Short),
    },
    {
      field: "updatedAt",
      headerName: "Updated At",
      flex: 1,
      valueFormatter: (params) =>
        formatDate(params.value, DateFormatVariants.Short),
    },
  ];

  return (
    <>
      <Header title="UserTypes" />
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

export default UserTypesList;
