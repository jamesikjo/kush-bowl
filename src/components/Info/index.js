import React from "react";
import {
  Container,
  Grid,
  makeStyles,
  Typography,
  useTheme,
  useMediaQuery,
  Box,
} from "@material-ui/core";
import bowlLogo from "../../assets/images/bowl-logo.png";
import plate from "../../assets/images/kush-plate.png";
import YelpButtonLink from "./YelpButtonLink";
import Hours from "./Hours";

const useStyles = makeStyles({
  mainContainer: {
    height: "100%",
    backgroundColor: "#e8f4ea",
    paddingTop: "5rem",
    paddingBottom: "5rem",
  },
});

const Info = (props, ref) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Box ref={ref} className={classes.mainContainer} component="section">
      <Grid container direction="column" alignItems="center">
        <Grid item className={classes.mainTitle} align="center">
          <Typography
            color="primary"
            variant="h4"
            gutterBottom
            style={{ fontWeight: "bold" }}
          >
            A Higher Dining Experience
          </Typography>
        </Grid>
        <Grid item style={{ marginBottom: "1rem" }} align="center">
          <Container maxWidth="md">
            <Typography color="primary" variant="subtitle1">
              We are a family friendly teriyaki bowl restaurant based in
              Cypress, CA. We specialize in teriyaki bowls, kebabs and
              breakfast. Everything is fresh and made to order. Low prices and
              hearty portions. Conveniently located inside the Cypress Auto Spa
            </Typography>
          </Container>
        </Grid>
        <Grid item>
          <Grid item container style={{ marginBottom: "3rem" }}>
            <Grid item>
              <img
                src={bowlLogo}
                alt="bowl logo"
                style={{ width: 50, height: 50 }}
              />
            </Grid>
            <Grid item style={{ margin: matchSM ? "0rem 3rem" : "0rem 5rem" }}>
              <YelpButtonLink />
            </Grid>
            <Grid item>
              <img
                src={bowlLogo}
                alt="bowl logo"
                style={{ width: 50, height: 50 }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item align="center">
          <Hours />
        </Grid>

        <Grid item>
          <Grid item container justifyContent="center" alignItems="center">
            {[1, 2].map((item) => (
              <Grid item key={item}>
                <img
                  src={plate}
                  alt="bowl logo"
                  style={{
                    width: matchSM ? 180 : 225,
                    height: matchSM ? 180 : 225,
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default React.forwardRef(Info);
