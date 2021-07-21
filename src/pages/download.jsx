import React from "react";
import ChromeLogo from "../images/logo-chrome.svg";
import FirefoxLogo from "../images/logo-firefox.svg";
import OperaLogo from "../images/logo-opera.svg";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import bgDots from "../images/bg-dots.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "2rem",
  },
  titleContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "75px 180px 75px 180px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      margin: "75px 0px 75px 0px",
    },
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontWeight: "600",
    lineHeight: "1.15em",
    letterSpacing: "0.015em",
    fontSize: "1.4rem",
    color: "hsl(229, 31%, 21%)",
    marginBottom: "5%",
  },
  titlePara: {
    width: "100%",
    textAlign: "center",
    marginTop: "1rem",
    marginBottom: "0.9rem",
    color: "hsl(229, 8%, 60%)",
    fontSize: "1rem",
    fontWeight: "600",
  },
  cardLayout: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    padding: "25% 5% 7% 5%",
    boxShadow: "0px 15px 11px 1px rgb(0 0 0 / 9%)",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      padding: "inherit",
      paddingTop: "4em",
    },
  },
  btn__download: {
    textTransform: "none",
    marginTop: "20px",
    padding: "15px",
    fontSize: ".9rem",
    fontWeight: "600",
    width: "100%",
  },
  grdContBlock: {
    display: "flex",
    justifyContent: "center",
    height: "80vh",
    width: "80%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
    },
  },
}));

const browserArr = [
  { name: "Chrome", version: "62", image: ChromeLogo, style: "flex-start" },
  { name: "FireFox", version: "55", image: FirefoxLogo, style: "center" },
  { name: "Opera", version: "46", image: OperaLogo, style: "flex-end" },
];

const DownloadSection = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.titleContainer}>
        <div style={{ maxWidth: "60%" }}>
          <Typography className={classes.title}>
            Download the extension
          </Typography>
          <Typography className={classes.titlePara}>
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </Typography>
        </div>
      </div>
      <div className={classes.grdContBlock}>
        <Grid container spacing={3} style={{ maxWidth: "90%" }}>
          {browserArr.map((browser, idx) => {
            return (
              <Grid
                key={idx}
                item
                sm={12}
                md={4}
                style={{ alignSelf: browser.style }}
              >
                <div className={classes.cardLayout}>
                  <div>
                    <img
                      src={browser.image}
                      title={browser.name}
                      style={{ height: "100px" }}
                      alt={browser.name}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        className={classes.title}
                      >
                        Add to {browser.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className={classes.titlePara}
                      >
                        Minimum version {browser.version}
                      </Typography>
                    </CardContent>
                  </div>
                  <img src={bgDots} />
                  <CardActions
                    style={{ justifyContent: "center", marginTop: "2%" }}
                  >
                    <Button
                      size="small"
                      color="primary"
                      variant="contained"
                      className={classes.btn__download}
                    >
                      Add & Install Extension
                    </Button>
                  </CardActions>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default DownloadSection;
