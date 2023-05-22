import { Box } from "@mui/material";
import AdminTabs from "./AdminTabs";

const Admin = () => {
  return (
    <Box
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <AdminTabs />
    </Box>
  );
};

export default Admin;
