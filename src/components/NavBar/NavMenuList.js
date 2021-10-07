import React from "react";
import { NavLink } from "react-router-dom";
import { MenuItem } from "@material-ui/core";

const NavMenuList = ({ handleClose, handleMenuOpen }) => {
  return (
    <>
      <MenuItem onClick={handleClose} component={NavLink} to="/" divider>
        Home
      </MenuItem>
      <MenuItem onClick={handleMenuOpen} divider>
        See Menu
      </MenuItem>
      <MenuItem onClick={handleClose} divider>
        <a
          href="https://kushbowl.square.site/"
          rel="noopener noreferrer"
          target="_blank"
          style={{ textDecoration: "inherit", color: "inherit" }}
        >
          Order Takeout
        </a>
      </MenuItem>
      <MenuItem onClick={handleClose} component={NavLink} to="/contact">
        Contact Us
      </MenuItem>
    </>
  );
};

export default NavMenuList;
