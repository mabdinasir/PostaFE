import { makeStyles } from "tss-react/mui";
import theme from "../../../styles/theme";

const useStyles = makeStyles()(() => ({
  signinContainer: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default useStyles;
