import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CssBaseline, IconButton, Toolbar, Typography } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { FC } from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import { drawerWidth } from "../../settings/global";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

type CustomAppBarProps = {
  title: string;
  backButton?: boolean;
};

const CustomAppBar: FC<CustomAppBarProps> = ({ title, backButton = true }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <Box
      position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        open
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          {backButton && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleBackClick}
            >
              <ArrowBackIcon fontSize="large" />
            </IconButton>
          )}
          <Typography
            variant="h3"
            sx={{
              flexGrow: 1,
              fontFamily: "Special Elite",
              textDecoration: "none",
              ...(!backButton && { marginLeft: 3 }),
            }}
          >
            <FormattedMessage id={title} />
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default CustomAppBar;
