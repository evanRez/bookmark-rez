import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import Hero from "../images/illustration-hero.svg";
import Logo from "../images/logo-bookmark.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "2rem",
    marginBottom: "13rem",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
  },
  barStyle: {
    padding: "10px 25px",
  },
  btnContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
  },
  contentContainer: {
    marginTop: "5rem",
    padding: "2% 4%",
  },
  heroImg: {
    position: "absolute",
    zIndex: "2",
    // visibility: "hidden",
  },
  heroBlueBlob: {
    position: "absolute",
    width: "100%",
    height: "85%",
    margin: "30% 20% 20% 35%",
    zIndex: "1",
    backgroundColor: "hsl(231, 69%, 60%)",
    borderBottomLeftRadius: "170px",
  },

  headerTitle: {
    marginTop: "4rem",
    marginBottom: "1rem",
    fontWeight: "600",
    lineHeight: "1.15em",
    letterSpacing: "0.015em",
    fontSize: "3rem",
    color: "hsl(229, 31%, 21%)",
  },
  headerPara: {
    marginTop: "1rem",
    marginBottom: "1rem",
    color: "hsl(229, 8%, 60%)",
    fontSize: "1.2rem",
    fontWeight: "500",
  },
  btn__header: {
    fontSize: ".8rem",
    letterSpacing: "0.05rem",
    marginLeft: "0.6rem",
    padding: "7px 28px",
    fontWeight: "600",
  },
  btn__hero: {
    textTransform: "none",
    marginRight: "20px",
    fontSize: ".85rem",
    fontWeight: "600",
    boxShadow: "0 5px 6px 0 rgb(0 0 0 / 12%)",
    marginTop: "1rem",
    letterSpacing: "0.03em",
    padding: "15px 22px",
    backgroundColor: "#f9fafa",
  },
  imgGridItem: {
    position: "relative",
  },
}));

export default function HeaderComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="#fff"
        elevation={0}
        className={classes.barStyle}
      >
        <Toolbar>
          <img src={Logo} />

          <div className={classes.btnContainer}>
            <Button className={classes.btn__header} color="hsl(229, 31%, 21%)">
              Features
            </Button>
            <Button className={classes.btn__header} color="hsl(229, 31%, 21%)">
              Pricing
            </Button>
            <Button className={classes.btn__header} color="hsl(229, 31%, 21%)">
              Contact
            </Button>
            <Button
              className={classes.btn__header}
              color="secondary"
              variant="contained"
            >
              Login
            </Button>
          </div>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.contentContainer}>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" className={classes.headerTitle}>
            A Simple Bookmark Manager
          </Typography>
          <Typography varaint="p" className={classes.headerPara}>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </Typography>
          <Button
            className={classes.btn__hero}
            variant="contained"
            color="primary"
            style={{ backgroundColor: "hsl(231, 69%, 60%)" }}
          >
            <Typography>Get it on Chrome</Typography>
          </Button>
          <Button className={classes.btn__hero} variant="contained">
            <Typography color="hsl(229, 31%, 21%)">
              Get it on Firefox
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imgGridItem}>
          <img className={classes.heroImg} src={Hero} />
          <div className={classes.heroBlueBlob} />
        </Grid>
      </Grid>
    </div>
  );
}
