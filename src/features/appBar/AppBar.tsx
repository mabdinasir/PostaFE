import React, { useState, useEffect, Fragment, FC } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import ScrollSpy from "react-ui-scrollspy";
// import Scrollspy from "react-scrollspy";
// import { useTranslation } from "next-i18next";
// import Settings from "./Settings";
import MobileMenu from "./MobileMenu";
import logo from "../../assets/images/agency-logo.png";
import brand from "./text/brand";
import routeLink from "./text/link";
import useStyles from "./styles/appBar";
import navMenu from "../../helpers/configs/navMenu";

type CreateData = {
    id: number;
    name: string;
    url: string;
    offset: number;
};

let counter = 0;
const createData = (name: string, url: string, offset: number): CreateData => {
    return {
        id: ++counter,
        name,
        url,
        offset,
    };
};

type LinkBtnProps = {
    to: string;
};

const LinkBtn = React.forwardRef(function LinkBtn(props: LinkBtnProps, ref) {
    return <AnchorLink href={props.to} {...props} />;
});

type HeaderProps = {
    onToggleDark?: () => void;
    onToggleDir?: () => void;
    invert?: boolean;
};

const Header: FC<HeaderProps> = ({ onToggleDark, onToggleDir, invert }) => {
    // Theme breakpoints
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    // Translation
    // const { t, i18n } = useTranslation("common");
    // const curLang = "/" + i18n.language;

    // Scroll and Fixed Menu
    const [fixed, setFixed] = useState(false);
    let flagFixed = false;
    const handleScroll = () => {
        const doc = document.documentElement;
        const scroll =
            (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        const newFlagFixed = scroll > 80;
        if (flagFixed !== newFlagFixed) {
            setFixed(newFlagFixed);
            flagFixed = newFlagFixed;
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    const { classes, cx } = useStyles();

    const [menuList] = useState([
        createData(navMenu[0], "#" + navMenu[0], 200),
        createData(navMenu[1], "#" + navMenu[1], 200),
        createData(navMenu[2], "#" + navMenu[2], 200),
        createData(navMenu[3], "#" + navMenu[3], 200),
    ]);
    const [openDrawer, setOpenDrawer] = useState(false);
    const handleOpenDrawer = () => {
        setOpenDrawer(!openDrawer);
    };

    return (
        <Fragment>
            {isMobile && (
                <MobileMenu open={openDrawer} toggleDrawer={handleOpenDrawer} />
            )}
            <AppBar
                component="div"
                position="relative"
                id="header"
                className={cx(
                    classes.header,
                    fixed && classes.fixed,
                    openDrawer && classes.openDrawer
                )}
            >
                <Container>
                    <div className={classes.headerContent}>
                        <nav
                            className={cx(
                                classes.navLogo,
                                invert && classes.invert
                            )}
                        >
                            {isMobile && (
                                <IconButton
                                    onClick={handleOpenDrawer}
                                    className={cx(
                                        "hamburger hamburger--spin",
                                        classes.mobileMenu,
                                        openDrawer && "is-active"
                                    )}
                                    size="large"
                                >
                                    <span className="hamburger-box">
                                        <span
                                            className={cx(
                                                classes.bar,
                                                "hamburger-inner"
                                            )}
                                        />
                                    </span>
                                </IconButton>
                            )}
                            <div className={classes.logo}>
                                {invert ? (
                                    <Link
                                        // href={curLang + routeLink.agency.home}
                                        to={routeLink.agency.home}
                                    >
                                        <img src={logo} alt="logo" />
                                        {brand.agency.name}
                                    </Link>
                                ) : (
                                    <AnchorLink href="#home">
                                        <img src={logo} alt="logo" />
                                        {brand.agency.name}
                                    </AnchorLink>
                                )}
                            </div>
                        </nav>
                        <nav
                            className={cx(
                                classes.navMenu,
                                invert && classes.invert
                            )}
                        >
                            {isDesktop && (
                                <ScrollSpy
                                    activeClass="active"
                                    // items={navMenu}
                                    // currentClassName="active"
                                >
                                    {menuList.map((item) => (
                                        <li key={item.id.toString()}>
                                            {invert ? (
                                                // eslint-disable-next-line
                                                <Button href={"/" + item.url}>
                                                    {/* {t(
                                                        "agency-landing.header_" +
                                                            item.name
                                                    )} */}
                                                    {item.name}
                                                </Button>
                                            ) : (
                                                // eslint-disable-next-line
                                                <Button
                                                    // component={LinkBtn}
                                                    // offset={item.offset || 0}
                                                    href={item.url}
                                                >
                                                    {/* {t(
                                                        "agency-landing.header_" +
                                                            item.name
                                                    )} */}
                                                    {item.name}
                                                </Button>
                                            )}
                                        </li>
                                    ))}
                                    <li>
                                        <Button
                                            // href={
                                            //     curLang +
                                            //     routeLink.agency.contact
                                            // }
                                            href={routeLink.agency.contact}
                                        >
                                            {/* {t("agency-landing.header_contact")} */}
                                            Contact
                                        </Button>
                                    </li>
                                </ScrollSpy>
                            )}
                            {/* <Settings
                                toggleDark={onToggleDark}
                                toggleDir={onToggleDir}
                                invert={invert}
                            /> */}
                        </nav>
                    </div>
                </Container>
            </AppBar>
        </Fragment>
    );
};

export default Header;
