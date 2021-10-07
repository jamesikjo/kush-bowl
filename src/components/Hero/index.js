import React, { useState } from "react";
import {
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
  Button,
} from "@material-ui/core";
import hero from "../../images/hero-img.png";
import mainLogo from "../../images/main-logo.png";
import MenuDialog from "./MenuDialog";

function Hero() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenuOpen = () => {
    setOpen(true);
  };

  const handleMenuClose = (value) => {
    setOpen(false);
  };

  return (
    <Box component="main" style={{ height: "50%", marginBottom: "2em" }}>
      <Grid container direction="column" justifyContent="center">
        <Grid item container direction="column" align="center">
          <Grid item>
            <img
              src={mainLogo}
              alt="store logo"
              style={{ width: matchSM ? 280 : 340 }}
            />
          </Grid>
          <Grid item style={{ marginBottom: "0.5rem" }}>
            <Typography variant="body1" color="primary">
              <b>5890 Lincoln Ave Cypress, CA 90630</b>
            </Typography>
          </Grid>

          <Grid item style={{ marginBottom: "1em" }}>
            <Button
              variant="outlined"
              onClick={handleMenuOpen}
              style={{ marginRight: "0.5em" }}
            >
              See Menu
            </Button>
            <a
              href="https://kushbowl.square.site/"
              rel="noopener noreferrer"
              target="_blank"
              style={{ textDecoration: "inherit" }}
            >
              <Button variant="outlined">Order Takeout</Button>
            </a>
          </Grid>
          <Grid item align="center">
            <img src={hero} alt="hero" style={{ width: matchSM ? 320 : 400 }} />
          </Grid>
        </Grid>
      </Grid>
      <MenuDialog open={open} handleMenuClose={handleMenuClose} />
    </Box>
  );
}

export default Hero;
