import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";
import Hero from "../images/illustration-hero.svg";
import Logo from "../images/logo-bookmark.svg";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "2rem",
    marginBottom: "13rem",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      margin: "0",
      transform: "scale(1.8)",
    },
  },
  tlbr: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  title: {
    flexGrow: 1,
  },
  barStyle: {
    padding: "10px 25px",
    [theme.breakpoints.down("sm")]: {
      padding: "0",
    },
  },
  btnContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  contentContainer: {
    marginTop: "5rem",
    padding: "2% 4%",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  heroImg: {
    position: "absolute",
    zIndex: "2",
    [theme.breakpoints.down("sm")]: {
      position: "inherit",
      width: "100%",
    },
  },
  heroBlueBlob: {
    position: "absolute",
    width: "100%",
    height: "85%",
    margin: "30% 20% 20% 35%",
    zIndex: "1",
    backgroundColor: "hsl(231, 69%, 60%)",
    borderBottomLeftRadius: "170px",
    [theme.breakpoints.down("sm")]: {
      margin: "-50% 20% 20% 35%",
      height: "60%",
    },
  },

  headerTitle: {
    marginTop: "4rem",
    marginBottom: "1rem",
    fontWeight: "600",
    lineHeight: "1.15em",
    letterSpacing: "0.015em",
    fontSize: "3rem",
    color: "hsl(229, 31%, 21%)",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.8rem",
    },
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
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
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
    [theme.breakpoints.down("sm")]: {
      marginRight: "0",
    },
  },
  imgGridItem: {
    position: "relative",

    [theme.breakpoints.down("sm")]: {
      order: "1",
    },
  },
  textGrdItem: {
    [theme.breakpoints.down("sm")]: {
      order: "2",
      textAlign: "center",
      margin: "auto",
    },
  },
  mobileNav__wrapper: {
    display: "none",
  },
  mobileNav__wrapper_active: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "hsl(229, 31%, 21%)",
    position: "fixed",
    height: "100vh",
    marginTop: "-14%",
    paddingTop: "35%",
    width: "103vw",
    marginLeft: "-3%",
    opacity: "94%",
    zIndex: "3",
    alignItems: "center",
  },
  mobileNav__list: {
    display: "flex",
    flexDirection: "column",
    color: "#FFF",
    transform: "scale(1.5)",
    marginTop: "3rem",
  },
  mobileNav__btn: {
    color: "#fff",
    borderTop: ".5px solid",
    borderBottom: ".5px solid",
    borderRadius: "0",
    padding: "1em 5em",
    letterSpacing: "0.15em",
  },
  mobileNav__SignIn: {
    color: "#fff",
    marginTop: "1rem",
    padding: "1em 5em",
    letterSpacing: "0.15em",
    border: "2px solid",
  },
  closeButton: {
    zIndex: "3",
    color: "#fff",
    display: "flex",
    margin: "0",
    transform: "scale(1.8)",
  },
  mobileNav__social: {
    color: "#fff",
    position: "fixed",
    bottom: "0",
  },
  lilIcon: {
    color: "#fff",
    transform: "scale(2)",
    margin: "1em",
  },
}));

export default function HeaderComponent() {
  const classes = useStyles();
  const [active, setActive] = useState(false);

  return (
    <div className={classes.root}>
      <div
        className={
          active
            ? classes.mobileNav__wrapper_active
            : classes.mobileNav__wrapper
        }
      >
        <div className={classes.mobileNav__list}>
          <Button className={classes.mobileNav__btn}>Features</Button>
          <Button className={classes.mobileNav__btn}>Pricing</Button>
          <Button className={classes.mobileNav__btn}>Contact</Button>
          <Button className={classes.mobileNav__SignIn} variant="outlined">
            Contact
          </Button>
        </div>
        <div className={classes.mobileNav__social}>
          <a href="#">
            <FacebookIcon className={classes.lilIcon} />
          </a>
          <a href="#">
            <TwitterIcon className={classes.lilIcon} />
          </a>
        </div>
      </div>
      <AppBar
        position="static"
        color="#fff"
        elevation={0}
        className={classes.barStyle}
      >
        <Toolbar className={classes.tlbr}>
          {active ? (
            <img
              style={{ alignItems: "center", zIndex: "4" }}
              src="https://bookmark-tediko.netlify.app/images/logo-bookmark-white.svg?5f5c0b755ecfffc1468063404877de02"
              alt="white logo img"
            />
          ) : (
            <img src={Logo} alt="logo" />
          )}

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
            className={active ? classes.closeButton : classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setActive(!active)}
          >
            {active ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.contentContainer}>
        <Grid item sm={12} md={6} className={classes.textGrdItem}>
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
        <Grid item sm={12} md={6} className={classes.imgGridItem}>
          <img className={classes.heroImg} src={Hero} />
          <div className={classes.heroBlueBlob} />
        </Grid>
      </Grid>
    </div>
  );
}
