import React from "react";
import { Typography } from "@material-ui/core";

const Hours = () => {
  return (
    <>
      <Typography color="primary" variant="h5" gutterBottom>
        <b>Current Hours</b>
      </Typography>
      <Typography color="primary" component="h6" variant="subtitle1">
        Monday – Friday | <b>9AM – 7:30PM </b>
      </Typography>
      <Typography color="primary" component="h6" variant="subtitle1">
        Saturday – Sunday | <b>9AM – 5:30PM</b>
      </Typography>
      <Typography color="primary" component="h6" variant="subtitle1">
        Breakfast Served | <b>All Day</b>
      </Typography>
    </>
  );
};

export default Hours;
