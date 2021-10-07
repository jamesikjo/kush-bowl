import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import {
  makeStyles,
  Menu,
  MenuItem,
  Hidden,
  Container,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import mainLogo from "../../images/main-logo.png";
import NavLinks from "./NavLinks";

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
  navBtn: {
    marginRight: "1rem",
    fontSize: "1rem",
    "&.active": {
      fontWeight: "bold",
    },
    "&:hover": {
      fontWeight: "bold",
      color: theme.palette.primary.main,
    },
  },
}));
const NavBar = ({ inViewInfo }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const history = useHistory();
  const { pathname } = history.location;

  const classes = useStyles({ inViewInfo, pathname });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav>
      <AppBar position="fixed" className={classes.appBar}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Hidden mdUp>
              <IconButton edge="start" onClick={handleClick} aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} component={Link} to={"/"}>
                  Home
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  component={Link}
                  to={"/takeout/bowls"}
                >
                  Order Takeout
                </MenuItem>
                <NavLink onClick={handleClose} to={"/contact"}>
                  Contact Us
                </NavLink>
              </Menu>
            </Hidden>
            <Hidden only={["xs", "sm"]}>
              <div className={classes.logoBtn}>
                <Button
                  color="primary"
                  variant="text"
                  onClick={() => history.push("/")}
                  style={{ backgroundColor: "transparent" }}
                >
                  <img src={mainLogo} alt="nav logo" style={{ height: 55 }} />
                </Button>
              </div>
              <div>
                <NavLinks />
              </div>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </nav>
  );
};

export default NavBar;
