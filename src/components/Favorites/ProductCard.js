import React, { useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Modal,
  Typography,
  Backdrop,
  Link,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    width: 300,
    display: "flex",
    flexDirection: "column",
  },
  cardImg: {
    borderRadius: 3,
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
    paddingBottom: 0,
  },
  cardActions: { justifyContent: "center" },
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

export default function ProductCard({ name, desc, img, category }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Card className={classes.card} elevation={3}>
      <CardActionArea onClick={handleOpen}>
        <CardMedia
          className={classes.cardImg}
          alt={name}
          image={img}
          title={name}
        />
      </CardActionArea>
      <CardContent className={classes.cardContent}>
        <Typography color="primary" variant="body1">
          <b>{name}</b>
        </Typography>
        <Typography color="primary" variant="body2">
          {desc}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Link
          href="https://squareup.com/us/en/online-store"
          rel="noopener noreferrer"
          target="_blank"
          style={{ textDecoration: "inherit" }}
        >
          <Button
            variant="outlined"
            style={{ marginBottom: "0.5rem", fontSize: "0.7rem" }}
          >
            Order Here
          </Button>
        </Link>
      </CardActions>

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
