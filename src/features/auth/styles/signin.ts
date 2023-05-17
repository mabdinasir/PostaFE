import { makeStyles } from "tss-react/mui";
import theme from "../../../styles/theme";

const useStyles = makeStyles()(() => ({
  common: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  signinContainer: {
    marginTop: theme.spacing(4),
  },
  googleButton: {
    marginTop: theme.spacing(6),
  },
  orText: {
    marginTop: theme.spacing(6),
    color: theme.palette.grey[500],
  },
}));

export default useStyles;
