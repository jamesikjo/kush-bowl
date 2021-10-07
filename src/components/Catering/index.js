import React from "react";
import {
  Grid,
  makeStyles,
  Typography,
  Button,
  Box,
  useTheme,
} from "@material-ui/core";
import catering from "../../assets/images/catering.jpg";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    height: "40vh",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url(${catering})`,
  },
});

const Catering = () => {
  const location = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Box className={classes.root} component="section">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ height: "100%" }}
      >
        <Grid item style={{ marginBottom: "0.5rem" }}>
          <Typography
            variant="h5"
            style={{ color: theme.palette.primary.contrastText }}
          >
            Catering Available
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => location.push("/contact")}
          >
            Contact Us
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Catering;
