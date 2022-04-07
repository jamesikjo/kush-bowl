import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import ProductCard from "./ProductCard";
import { productData } from "./ProductData";

export default function Favorites() {
  return (
    <Box component="section">
      <Typography
        color="primary"
        variant="h4"
        align="center"
        style={{ fontWeight: 700, marginBottom: "1em" }}
      >
        Kush Bowl Signature Dishes
      </Typography>
      <Grid
        container
        align="center"
        style={{ alignContent: "center", justifyContent: "center" }}
      >
        {productData.map((m, idx) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={idx}
            style={{ marginBottom: "2em" }}
          >
            <ProductCard {...m} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
