/* eslint-disable react/jsx-props-no-spreading */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { FC, ReactNode, SyntheticEvent, useState } from "react";
import english from "../../locales/english.json";
import theme from "../../styles/theme";
import useAdminTabItems from "./AdminTabItems";

interface TabPanelProps {
  children?: ReactNode;
  dir?: string;
  index: number;
  value: number;
}

const TabPanel: FC<TabPanelProps> = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
};

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const AdminTabs = () => {
  const [value, setValue] = useState(0);
  const { adminTabItems } = english;
  const tabs = useAdminTabItems();

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: theme.palette.common.black }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: theme.palette.common.white,
            },
          }}
        >
          {adminTabItems.map((item) => (
            <Tab
              key={item}
              label={item}
              {...a11yProps(0)}
              sx={{
                fontFamily: "Special Elite",
                fontSize: "22px",
                color: theme.palette.common.white,
                textTransform: "capitalize",
              }}
            />
          ))}
        </Tabs>
      </AppBar>
      {tabs.map((tab, index) => (
        <TabPanel key={tab.name} value={value} index={index}>
          {tab.name === adminTabItems[value] && <tab.component />}
        </TabPanel>
      ))}
    </Box>
  );
};

export default AdminTabs;
