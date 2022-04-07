import React, { useState } from "react";
import {
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
  Button,
} from "@material-ui/core";
import hero from "../../assets/images/hero-img.png";
import kushLogo from "../../assets/images/kush-logo.png";
import MenuDialog from "../../Menu";

function Hero() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenuOpen = () => {
    //open pdf menu dialog
    setOpen(true);
  };

  const handleMenuClose = () => {
    setOpen(false);
  };

  return (
    <Box component="main" style={{ height: "50%", marginBottom: "3em" }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <img
            src={kushLogo}
            alt="store logo"
            style={{ width: matchSM ? 280 : 420 }}
          />
        </Grid>

        <Grid item style={{ marginBottom: "2em" }}>
          <Typography
            variant="h6"
            color="secondary"
            style={{ fontWeight: 700, marginBottom: "1em" }}
          >
            5890 Lincoln Ave Cypress, CA 90630
          </Typography>
          <Box style={{ display: "flex", justifyContent: "center" }}>
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
          </Box>
        </Grid>
        <Grid item>
          <img src={hero} alt="hero" style={{ width: matchSM ? 320 : 400 }} />
        </Grid>
      </Grid>
      <MenuDialog open={open} handleMenuClose={handleMenuClose} />
    </Box>
  );
}

export default Hero;
