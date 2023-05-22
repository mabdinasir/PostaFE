import { ListItemButton, ListItemIcon } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import * as React from "react";
import { FC } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import mapItemsToIcons from "../../helpers/menuItemToIcon";
import english from "../../locales/english.json";

type ProfileMenuProps = {
  isAuthenticated: boolean;
};

const ProfileMenu: FC<ProfileMenuProps> = ({
  isAuthenticated,
}): JSX.Element => {
  const { authItems, accountItems } = english;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = isAuthenticated ? accountItems : authItems;
  const menuItemsWithIcons = mapItemsToIcons(menuItems);

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title={<FormattedMessage id="opensettings" />}>
        <IconButton onClick={handleClick}>
          <Avatar alt="Remy Sharp" />
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {menuItemsWithIcons.map((item) => (
          <MenuItem
            key={item.label}
            onClick={handleClose}
            sx={{
              "&:hover": {
                bgcolor: "primary.light",
              },
            }}
          >
            <ListItemButton
              component={Link}
              to={`/${item.label.toLowerCase().replace(/\s+/g, "")}`}
              sx={{
                minHeight: 48,
                justifyContent: open ? "space-between" : "center",
                px: 2.5,
                "&:hover": {
                  bgcolor: "transparent",
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              {item.label}
            </ListItemButton>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default ProfileMenu;
