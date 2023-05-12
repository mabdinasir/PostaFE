import {
  purple50,
  purple100,
  purple200,
  purple300,
  purple400,
  purple500,
  purple600,
  purple700,
  purple800,
  purple900,
  purple1000,
} from "../colors";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    purple?: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
  }
}

const purple = {
  50: purple50,
  100: purple100,
  200: purple200,
  300: purple300,
  400: purple400,
  500: purple500,
  600: purple600,
  700: purple700,
  800: purple800,
  900: purple900,
  1000: purple1000,
};

export default purple;
