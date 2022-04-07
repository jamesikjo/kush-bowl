import React from "react";
import { Box, Typography } from "@material-ui/core";

const Hours = () => {
  return (
    <Box>
      <Box mb={3}>
        <Typography
          color="primary"
          variant="h4"
          gutterBottom
          style={{ fontWeight: "bold" }}
        >
          Buisness Hours:
        </Typography>
      </Box>
      <Box mb={2}>
        <Typography color="primary" variant="h6" style={{ fontWeight: 700 }}>
          Monday – Friday
        </Typography>
        <Typography color="primary" variant="subtitle1">
          9AM – 7:30PM
        </Typography>
      </Box>
      <Box mb={2}>
        <Typography color="primary" variant="h6" style={{ fontWeight: 700 }}>
          Saturday – Sunday
        </Typography>
        <Typography color="primary" variant="subtitle1">
          9AM – 5:30PM
        </Typography>
      </Box>
    </Box>
  );
};

export default Hours;
