import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Logo from "../images/logo-bookmark.svg";
import Grid from "@material-ui/core/Grid";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  bgStyle: {
    backgroundColor: "hsl(231, 69%, 60%)",
    minHeight: "60vh",
    color: "#fff",
    width: "100vw",

    // color: theme.palette.common.white,
  },
  footerHook: {
    display: "flex",
    flexFlow: "column wrap",
    textAlign: "center",
    paddingTop: "5%",
    paddingBottom: "2%",
    maxWidth: "38%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  superScript: {
    letterSpacing: "0.33rem",
    padding: "2%",
    fontWeight: "600",
  },
  footerTitle: {
    marginTop: "1rem",
    marginBottom: "1rem",
    fontWeight: "600",
    lineHeight: "1.15em",
    letterSpacing: "0.015em",
    fontSize: "2rem",
    color: "#fff",
  },
  btn__header: {
    color: "#fff",
    fontSize: ".8rem",
    letterSpacing: "0.05rem",
    marginLeft: "0.6rem",
    padding: "7px 28px",
    fontWeight: "600",
  },

  btn__contactUs: {
    textTransform: "none",
    fontSize: ".85rem",
    fontWeight: "600",
    padding: "0 25px",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.bgStyle}>
      <div>
        <div className={classes.footerHook}>
          <Typography className={classes.superScript}>
            35,000+ ALREADY JOINED
          </Typography>
          <Typography className={classes.footerTitle}>
            Stay up-to-date with what we’re doing
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "6%",
          }}
        >
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Enter your email address"
              variant="outlined"
              style={{
                backgroundColor: "#fff",
                borderRadius: "5px",
                width: "300px",
                marginLeft: "-8%",
              }}
            />
          </form>
          <Button
            variant="contained"
            color="secondary"
            className={classes.btn__contactUs}
          >
            Contact Us
          </Button>
        </div>
      </div>

      <Grid
        container
        style={{
          backgroundColor: "hsl(229, 31%, 21%)",
          minHeight: "12vh",
          alignContent: "center",
          padding: "2rem 2.5rem",
        }}
      >
        <Grid item xs={12} md={2}>
          <img
            style={{ alignItems: "center" }}
            src="https://bookmark-tediko.netlify.app/images/logo-bookmark-white.svg?5f5c0b755ecfffc1468063404877de02"
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Button className={classes.btn__header}>Features</Button>
          <Button className={classes.btn__header}>Pricing</Button>
          <Button className={classes.btn__header}>Contact</Button>
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          style={{
            display: "flex",
            gap: "38px",
            justifyContent: "flex-end",
            paddingRight: "4%",
            marginTop: "0",
          }}
        >
          <a href="#">
            <FacebookIcon
              style={{ height: "2.2rem", width: "2.2rem", color: "#fff" }}
            />
          </a>
          <a href="#">
            <TwitterIcon
              style={{ height: "2.2rem", width: "2.2rem", color: "#fff" }}
            />
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
