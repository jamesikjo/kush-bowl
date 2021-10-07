import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import ProductCard from "./ProductCard";
import { productData } from "./ProductData";

export default function Favorites() {
  return (
    <Container
      maxWidth="lg"
      component="section"
      style={{ paddingTop: "4.5em", paddingBottom: "5em" }}
    >
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
  );
}
