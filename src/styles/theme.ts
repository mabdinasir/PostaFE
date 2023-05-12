import { createTheme } from "@mui/material/styles";
import primary from "./palette/primary";
import { black, spacing, white } from "./palette/colors";
import grey from "./palette/customPalette/grey";

const theme = createTheme({
  typography: {
    fontFamily: "Nunito Sans",
  },
  spacing,
  palette: {
    primary,
    grey,
    common: {
      white,
      black,
    },
  },
});

export default theme;
