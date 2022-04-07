import { Box } from "@material-ui/core";
import React from "react";
import yelpLogo from "../../assets/images/yelp-logo.png";

const YelpButtonLink = () => {
  return (
    <Box style={{ margin: "0em 4em" }}>
      <a
        href="https://www.yelp.com/biz/the-kush-bowl-cypress"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img
          src={yelpLogo}
          alt="yelp logo"
          style={{ width: 80, height: 80, opacity: 0.9 }}
        />
      </a>
    </Box>
  );
};

export default YelpButtonLink;
