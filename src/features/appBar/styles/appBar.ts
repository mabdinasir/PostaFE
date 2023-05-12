import { makeStyles } from "tss-react/mui";
import { drawerWidth } from "../configs/config";
import theme from "../../../styles/theme";

const useStyles = makeStyles()(() => {
  return {
    toolbar: {
      background: theme.palette.primary.main,
      justifyContent: "space-between",
    },
    drawer: {
      "& .MuiDrawer-paper": {
        boxSizing: "border-box",
        width: drawerWidth,
        background: theme.palette.primary.light,
      },
    },
  };
});

export default useStyles;
