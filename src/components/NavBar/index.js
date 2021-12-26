import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  makeStyles,
  Menu,
  Hidden,
  Container,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import mainLogo from "../../assets/images/main-logo.png";
import kushLogo from "../../assets/images/kush-logo.png";
import NavLinks from "./NavLinks";
import MenuDialog from "../../Menu";
import NavMenuList from "./NavMenuList";

const useStyles = makeStyles((theme) => ({
  appBar: {
    paddingTop: 2,
    boxShadow: "none",
    backgroundColor: ({ inViewInfo, pathname }) =>
      !inViewInfo && pathname === "/"
        ? "rgb(232, 244, 234, 0.8)"
        : "transparent",
  },
  logoBtn: {
    flexGrow: 1,
  },
}));

const NavBar = ({ inViewInfo }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenuPdf, setOpenMenuPdf] = useState(false);

  const history = useHistory();
  const { pathname } = history.location;
  const classes = useStyles({ inViewInfo, pathname });
  const theme = useTheme();
  const matchMD = useMediaQuery(theme.breakpoints.down("md"));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuOpen = () => {
    setAnchorEl(null);
    setOpenMenuPdf(true);
  };

  return (
    <nav>
      <AppBar position="fixed" className={classes.appBar}>
        <Container maxWidth="xl">
          <Toolbar disableGutters={matchMD && true}>
            <Hidden mdUp>
              <IconButton edge="start" onClick={handleClick} aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Menu
                id="nav-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <NavMenuList
                  handleClose={handleClose}
                  handleMenuOpen={handleMenuOpen}
                />
              </Menu>
            </Hidden>
            <MenuDialog
              open={openMenuPdf}
              handleMenuClose={() => setOpenMenuPdf(false)}
            />
            <Hidden only={["xs", "sm"]}>
              <div className={classes.logoBtn}>
                <Button
                  color="primary"
                  variant="text"
                  onClick={() => history.push("/")}
                  style={{ backgroundColor: "transparent" }}
                >
                  <img src={kushLogo} alt="nav logo" style={{ height: 55 }} />
                </Button>
              </div>
              <NavLinks handleMenuOpen={handleMenuOpen} />
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </nav>
  );
};

export default NavBar;
