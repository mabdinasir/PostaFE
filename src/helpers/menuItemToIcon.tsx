import { Login, Logout, PersonAdd, Settings } from "@mui/icons-material";
import { Avatar } from "@mui/material";

const mapItemsToIcons = (menuItems: string[]) => {
  return menuItems.map((item) => {
    switch (item) {
      case "Profile":
        return { icon: <Avatar />, label: item };
      case "Settings":
        return { icon: <Settings fontSize="small" />, label: item };
      case "Sign Out":
        return { icon: <Logout fontSize="small" />, label: item };
      case "Sign in":
        return { icon: <Login fontSize="small" />, label: item };
      case "Sign Up":
        return { icon: <PersonAdd fontSize="small" />, label: item };
      default:
        return { icon: null, label: item };
    }
  });
};

export default mapItemsToIcons;
