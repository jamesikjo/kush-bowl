import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { makeStyles, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  socialIcons: {
    color: theme.palette.primary.contrastText,
    margin: "0rem 0.5em",
  },
}));

const SocialIconLinks = () => {
  const classes = useStyles();

  const socialIconList = [
    {
      icon: <InstagramIcon size="small" className={classes.socialIcons} />,
      path: "https://www.instagram.com/thekush_bowl/",
    },
    {
      icon: <FacebookIcon size="small" className={classes.socialIcons} />,
      path: "https://www.facebook.com/TheKushBowl/",
    },
    {
      icon: <MailOutlineIcon size="small" className={classes.socialIcons} />,
      path: "/contact",
    },
  ];
  return (
    <>
      {socialIconList.map(({ icon, path }, idx) => (
        <Link href={path} rel="noopener noreferrer" target="_blank" key={idx}>
          {icon}
        </Link>
      ))}
    </>
  );
};

export default SocialIconLinks;
