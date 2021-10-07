import React from "react";
import { makeStyles, Typography, Grid, Divider, Link } from "@material-ui/core";
import footerLogo from "../../assets/images/footer-logo.png";
import SocialIconLinks from "./SocialIconLinks";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#2d3e50",
    width: "100%",
    padding: "2.5rem 0rem",
    marginTop: "auto",
  },
  footerFont: {
    color: theme.palette.primary.contrastText,
    textDecoration: "none",
  },

  copyRightFont: {
    fontSize: 8,
    color: theme.palette.primary.contrastText,
    "& a": {
      textDecoration: "none",
      color: "inherit",
    },
  },
}));

export const footerLinks = [
  { title: "Home", path: "/" },
  { title: "Order Takeout", path: "https://kushbowl.square.site/" },
  { title: "Contact Us", path: "/contact" },
];

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <img src={footerLogo} alt="footer logo" style={{ width: 200 }} />
        </Grid>
        <Grid item>
          <Typography variant="body2" className={classes.footerFont}>
            5890 Lincoln Ave Cypress, CA 90630
          </Typography>
        </Grid>
        <Grid item style={{ marginBottom: "1rem" }}>
          <Typography variant="body2" className={classes.footerFont}>
            (714) 821-1347
          </Typography>
        </Grid>
        <Grid item style={{ marginBottom: "1rem" }} align="center">
          <Grid item container>
            {footerLinks.map(({ title, path }, idx) => (
              <React.Fragment key={title}>
                <Link
                  variant="body2"
                  href={path}
                  rel="noopener noreferrer"
                  className={classes.footerFont}
                >
                  {title}
                </Link>
                {idx < footerLinks.length - 1 && (
                  <Divider
                    orientation="vertical"
                    flexItem
                    style={{
                      backgroundColor: "#fff",
                      margin: "0rem 1rem",
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </Grid>
        </Grid>

        <Grid item style={{ marginBottom: "0.5rem" }}>
          <SocialIconLinks />
        </Grid>
        <Grid item>
          <Typography variant="body2" className={classes.copyRightFont}>
            ®2021 Kushbowl. All Rights Reserved.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" className={classes.copyRightFont}>
            Logo created with{" "}
            <Link
              href="https://www.LogoMakr.com"
              title="Logo Makr"
              // style={{ textDecoration: "none", color: "inherit" }}
            >
              LogoMakr.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};
export default Footer;
