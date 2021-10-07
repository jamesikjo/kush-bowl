import React from "react";
import { makeStyles, Button, useTheme } from "@material-ui/core";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";

import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navBtn: {
    marginLeft: "0.5em",
    fontSize: "0.9em",
    "&.active": {
      fontWeight: "bold",
    },
    "&:hover": {
      fontWeight: "bold",
      color: theme.palette.primary.main,
    },
  },
}));

const NavLinks = ({ handleMenuOpen }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <Button
        variant="text"
        component={NavLink}
        exact
        to="/"
        className={classes.navBtn}
      >
        Home
      </Button>
      <Button
        variant="text"
        onClick={handleMenuOpen}
        className={classes.navBtn}
      >
        Menu
      </Button>
      <a
        href="https://kushbowl.square.site/"
        rel="noopener noreferrer"
        target="_blank"
        style={{ textDecoration: "inherit" }}
      >
        <Button variant="text" className={classes.navBtn}>
          Takeout
        </Button>
      </a>
      <Button
        variant="text"
        component={NavLink}
        to="/contact"
        className={classes.navBtn}
      >
        Contact
      </Button>
      <Button variant="text" className={classes.navBtn} style={{ padding: 0 }}>
        <PhoneAndroidIcon
          htmlColor={theme.palette.primary.light}
          fontSize="medium"
        />
        <span>714-821-1347</span>
      </Button>
    </>
  );
};

export default NavLinks;
