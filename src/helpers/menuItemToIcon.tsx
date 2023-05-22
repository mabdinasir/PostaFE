import { Login, Logout, PersonAdd, Settings } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const mapItemsToIcons = (menuItems: string[]) => {
  return menuItems.map((item) => {
    switch (item) {
      case "Profile":
        return { icon: <AccountCircleIcon fontSize="large" />, label: item };
      case "Admin":
        return {
          icon: <AdminPanelSettingsIcon fontSize="large" />,
          label: item,
        };
      case "Settings":
        return { icon: <Settings fontSize="large" />, label: item };
      case "Sign Out":
        return { icon: <Logout fontSize="large" />, label: item };
      case "Sign in":
        return { icon: <Login fontSize="large" />, label: item };
      case "Sign Up":
        return { icon: <PersonAdd fontSize="large" />, label: item };
      default:
        return { icon: null, label: item };
    }
  });
};

export default mapItemsToIcons;
