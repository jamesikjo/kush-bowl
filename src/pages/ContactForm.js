import React, { useState, useEffect } from "react";
import {
  TextField,
  Typography,
  Button,
  Grid,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Layout from "../components/Layout";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexGrow: 1, //take up remaining space between header & footer
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 64, //height of header
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  const [success, setSuccess] = useState(false);
  const [subject, setSubject] = useState("");

  const subjectType = ["General Question", "Catering"];

  const handleChange = (event) => {
    setSubject(event.target.value);
  };
  useEffect(() => {
    if (window.location.search.includes("success")) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    }
  }, []);

  return (
    <Layout>
      <form
        onSubmit="submit"
        name="contact kushbowl"
        method="POST"
        data-netfliy="true"
        action="/contact/?success"
        className={classes.form}
      >
        <input type="hidden" name="form-name" value="contact kushbowl" />
        <Container maxWidth="xs" component="main">
          <Grid container spacing={2} direction="column">
            <Typography
              color="secondary"
              variant="body1"
              align="center"
              justify="center"
              style={{ fontWeight: 700 }}
            >
              Contact
            </Typography>
            <Typography
              color="primary"
              variant="h4"
              align="center"
              justify="center"
              style={{ fontWeight: 700 }}
            >
              Get in touch
            </Typography>
            <Grid item xs={12}>
              <Typography color="primary" variant="body2">
                NAME
              </Typography>
              <TextField
                required
                fullWidth
                variant="outlined"
                id="name"
                label="name"
                name="name"
                type="name"
                InputLabelProps={{ style: { fontSize: 0 }, shrink: false }}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography color="primary" variant="body2">
                EMAIL ADDRESS
              </Typography>
              <TextField
                required
                fullWidth
                variant="outlined"
                id="email"
                label="email"
                name="email"
                type="email"
                InputLabelProps={{ style: { fontSize: 0 }, shrink: false }}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography color="primary" variant="body2">
                SUBJECT
              </Typography>
              <TextField
                required
                fullWidth
                select
                variant="outlined"
                id="Native subject"
                value={subject}
                label="subject"
                name="subject"
                onChange={handleChange}
                SelectProps={{
                  native: true,
                }}
                InputLabelProps={{ style: { fontSize: 0 }, shrink: false }}
              >
                {subjectType.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <Typography color="primary" variant="body2">
                MESSAGE
              </Typography>
              <TextField
                required
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                id="message"
                label="message"
                name="message"
                InputLabelProps={{ style: { fontSize: 0 }, shrink: false }}
                style={{ marginBottom: "1rem" }}
              />
            </Grid>

            <Grid item xs={12} style={{ marginBottom: "1rem" }}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Send Message
              </Button>
            </Grid>
          </Grid>

          {success && (
            <Grid item xs={12}>
              <Typography color="primary" variant="body1" align="center">
                Thanks for your message!
              </Typography>
            </Grid>
          )}
        </Container>
      </form>
    </Layout>
  );
};

export default ContactForm;
