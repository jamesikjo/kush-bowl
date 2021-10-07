import React from "react";
import yelpLogo from "../../images/yelp-logo.png";

const YelpButtonLink = () => {
  return (
    <>
      <a
        href="https://www.yelp.com/biz/the-kush-bowl-cypress"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img
          src={yelpLogo}
          alt="yelp logo"
          style={{ width: 60, height: 60, opacity: 0.9 }}
        />
      </a>
    </>
  );
};

export default YelpButtonLink;
