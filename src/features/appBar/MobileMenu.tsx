import React, { FC } from "react";
import PropTypes from "prop-types";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
// import { useTranslation } from "next-i18next";
// import routeLink from "~/public/text/link";
import routeLink from "./text/link";
import useStyles from "./styles/appBar";
import menuItems from "../../helpers/configs/navMenu";

type MobileMenuProps = {
    toggleDrawer: () => void;
    open: boolean;
};

const MobileMenu: FC<MobileMenuProps> = (props) => {
    const { classes, cx } = useStyles();
    const { toggleDrawer, open } = props;
    // const { t, i18n } = useTranslation("common");

    // const curLang = "/" + i18n.language;

    const SideList = () => (
        <div
            className={classes.mobileNav}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
        >
            <div className={cx(classes.menu, open && classes.menuOpen)}>
                <List component="nav">
                    {menuItems.map((item, index) => (
                        <ListItem
                            button
                            component="a"
                            href={`#${item}`}
                            key={index.toString()}
                            style={{ animationDuration: index * 0.15 + "s" }}
                        >
                            <ListItemText
                                // primary={t("agency-landing.header_" + item)}
                                primary={item}
                                className={classes.menuList}
                            />
                        </ListItem>
                    ))}
                    <ListItem
                        // button
                        component="a"
                        // href={curLang + routeLink.agency.contact}
                        href={routeLink.agency.contact}
                        style={{
                            animationDuration: menuItems.length * 0.15 + "s",
                        }}
                    >
                        <ListItemText
                            // primary={t("agency-landing.header_contact")}
                            primary={"Contact"}
                            className={classes.menuList}
                        />
                    </ListItem>
                </List>
            </div>
        </div>
    );

    return (
        <SwipeableDrawer
            open={open}
            onClose={toggleDrawer}
            onOpen={toggleDrawer}
            classes={{
                paper: classes.paperNav,
            }}
        >
            <SideList />
        </SwipeableDrawer>
    );
}

export default MobileMenu;
