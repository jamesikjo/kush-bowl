import { Dialog, DialogTitle, IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import React from "react";
import MenuPdfPage from "./MenuPdfPage";

const MenuDialog = ({ handleMenuClose, open }) => {
  return (
    <Dialog
      maxWidth="md"
      onClose={handleMenuClose}
      open={open}
      scroll="body"
      PaperProps={{
        style: {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      }}
    >
      <DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleMenuClose}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            padding: 0,
            color: "#fff",
            background: "transparent",
          }}
        >
          <ArrowBackIcon style={{ fontSize: 30 }} />
        </IconButton>
      </DialogTitle>
      <MenuPdfPage />
    </Dialog>
  );
};

export default MenuDialog;
