import React, { useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Modal,
  Typography,
  Backdrop,
  Link,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    width: 400,
    [theme.breakpoints.down("sm")]: {
      width: 360,
    },
    display: "flex",
    flexDirection: "column",
  },
  cardImg: {
    height: "100%",
    width: "100%",
    borderRadius: 3,
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalImg: {
    width: "80%",
    height: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));

export default function ProductCard({ name, desc, img }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Card className={classes.card} elevation={2}>
      <CardActionArea onClick={handleOpen}>
        <CardMedia
          className={classes.cardImg}
          alt={name}
          image={img}
          title={name}
        />
      </CardActionArea>
      <CardContent className={classes.cardContent}>
        <Box mb={2}>
          <Typography color="primary" variant="h6" style={{ fontWeight: 700 }}>
            {name}
          </Typography>
          <Typography color="primary" variant="body1">
            {desc}
          </Typography>
        </Box>
        <Link
          href="https://kushbowl.square.site/"
          rel="noopener noreferrer"
          target="_blank"
          style={{ textDecoration: "inherit" }}
        >
          <Button variant="outlined" style={{ marginBottom: "0.5rem" }}>
            Order Here
          </Button>
        </Link>
      </CardContent>

      <Modal
        className={classes.modal}
        open={open}
        onClose={handleOpen}
        BackdropComponent={Backdrop}
        aria-labelledby={`modal-${name}`}
        aria-describedby={`modal-${desc}`}
      >
        <img
          className={classes.modalImg}
          onClick={handleOpen}
          src={img}
          alt={name}
        />
      </Modal>
    </Card>
  );
}
