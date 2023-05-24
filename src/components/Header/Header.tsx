import { Stack, Typography } from "@mui/material";
import { FC } from "react";

export interface HeaderProps {
  title: string;
  children?: React.ReactNode;
}

const Header: FC<HeaderProps> = ({ title, children }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 2, py: 0.5 }}
    >
      <Typography variant="h4">{title}</Typography>
      {children}
    </Stack>
  );
};

export default Header;
