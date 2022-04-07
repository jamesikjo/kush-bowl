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
  },
});

const Info = (props, ref) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Box ref={ref} className={classes.mainContainer} component="section">
      <Grid container direction="column" alignItems="center">
        <Grid item align="center">
          <Container maxWidth="lg">
            <Typography
              color="primary"
              variant="h3"
              gutterBottom
              style={{ fontWeight: 700 }}
            >
              A Higher Dining Experience
            </Typography>
            <Typography color="secondary" variant="h6" gutterBottom>
              We are a family friendly teriyaki bowl restaurant based in
              Cypress, CA. We specialize in teriyaki bowls, kebabs and
              breakfast. Everything is fresh and made to order. Low prices and
              hearty portions.
            </Typography>
            <Typography color="secondary" variant="h6">
              Conveniently located inside the Cypress Auto Spa
            </Typography>
          </Container>
        </Grid>
        <Grid item style={{ margin: "4em 0em" }}>
          <Box style={{ display: "flex" }}>
            <img
              src={bowlLogo}
              alt="bowl logo"
              style={{ width: 80, height: 80 }}
            />
            <YelpButtonLink />
            <img
              src={bowlLogo}
              alt="bowl logo"
              style={{ width: 80, height: 80 }}
            />
          </Box>
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
