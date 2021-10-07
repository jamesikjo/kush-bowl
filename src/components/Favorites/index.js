import React from "react";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import ProductCard from "./ProductCard";
import { productData } from "./ProductData";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    paddingTop: "4rem",
    paddingBottom: "6rem",
  },
});

export default function Favorites() {
  const classes = useStyles();

  return (
    <Box className={classes.root} component="section">
      <Container maxWidth="lg">
        <Typography color="primary" variant="h5" align="center">
          <b>Kush Bowl Signature Favorites</b>
        </Typography>
        <Grid
          container
          spacing={2}
          align="center"
          style={{ marginTop: "0.5rem" }}
        >
          {productData.map((m, idx) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
              <ProductCard {...m} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
