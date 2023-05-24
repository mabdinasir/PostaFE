import { Paper } from "@mui/material";
import { FC } from "react";
import theme from "../styles/theme";

type ContainerProps = {
  children: React.ReactNode;
};

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: theme.palette.background.default,
        fontFamily: "Quicksand",
      }}
    >
      {children}
    </Paper>
  );
};

export default Container;
