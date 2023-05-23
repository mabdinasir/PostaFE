import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import { drawerWidth } from "../../settings/global";

type PermanentDrawerProps = {
  items: string[];
};

const PermanentDrawer: FC<PermanentDrawerProps> = ({ items }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {items.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                component={Link}
                to={`/admin/${text.split(" ").join("").toLowerCase()}`}
                sx={{
                  "&:hover": {
                    bgcolor: "primary.light",
                  },
                }}
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 4.5 }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default PermanentDrawer;
