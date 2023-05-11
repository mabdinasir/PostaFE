import { makeStyles } from "tss-react/mui";
import { drawerWidth } from "../configs/config";

const useStyles = makeStyles()(() => {
  return {
    toolbar: {
      background: "#493D8A",
      justifyContent: "space-between",
    },
    drawer: {
      "& .MuiDrawer-paper": {
        boxSizing: "border-box",
        width: drawerWidth,
        background: "#F5F5F5",
      },
    },
  };
});

export default useStyles;
