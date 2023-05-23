import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";

type CustomAppBarProps = {
  titleId: string;
  backButton?: boolean;
};

const CustomAppBar: FC<CustomAppBarProps> = ({
  titleId,
  backButton = true,
}) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
            variant="h2"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: "Special Elite",
              textDecoration: "none",
              ...(!backButton && { marginLeft: 3 }),
            }}
          >
            <FormattedMessage id={titleId} />
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default CustomAppBar;
