import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Tab1 from "../images/illustration-features-tab-1.svg";
import Tab2 from "../images/illustration-features-tab-2.svg";
import Tab3 from "../images/illustration-features-tab-3.svg";

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
    fontSize: "2rem",
    color: "hsl(229, 31%, 21%)",
    marginBottom: "5%",
  },
  titlePara: {
    width: "100%",
    textAlign: "center",
    marginTop: "1rem",
    marginBottom: "1rem",
    color: "hsl(229, 8%, 60%)",
    fontSize: "1.2rem",
    fontWeight: "500",
  },
  featureLinksContainer: {
    maxWidth: "70%",
    display: "flex",
    justifyContent: "space-around",
    marginLeft: "auto",
    marginRight: "auto",
    borderBottom: "1px solid #e3e4e8",
    fontWeight: "500",
    color: "hsl(229, 8%, 60%)",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  },
  featureLink: {
    fontSize: "1rem",
    paddingBottom: "1rem",
    "&:hover": {
      cursor: "pointer",
    },
  },
  featureLinkActive: {
    fontSize: "1rem",
    paddingBottom: ".9rem",
    borderBottom: "3px solid red",
  },

  featureDescActive: {
    alignItems: "flex-start",
    display: "flex",
    flexFlow: "column",
  },
  featureTitle: {
    color: "hsl(229, 31%, 21%)",
    fontSize: "2.2rem",
    fontWeight: "600",
    marginBottom: "5%",
  },
  featureDescPara: {
    color: "hsl(229, 8%, 60%)",
    fontWeight: "600",
    fontSize: "1rem",
    marginBottom: "5%",
    marginBottom: "1em",
  },
  contentContainer: {
    marginTop: "5.2rem",
    display: "flex",
    flexWrap: "no-wrap",
    marginLeft: "6%",
    marginRight: "4%",
    maxWidth: "90%",
  },
  btn__hero: {
    textTransform: "none",
    marginTop: "20px",
    padding: "15px",
    fontSize: ".8rem",
    fontWeight: "600",
    width: "7rem",
  },
  featuredImgContainer: {
    position: "relative",
    margin: "0 auto",
  },
  featuredImg: {
    position: "absolute",
    zIndex: "1",
    margin: "0% 0% 0% -11%",
  },
  featuredBlob: {
    width: "120%",
    height: "120%",
    margin: "20% 50% 50% -40%",
    position: "absolute",
    backgroundColor: "hsl(231, 69%, 60%)",
    borderBottomRightRadius: "180px",
    borderTopRightRadius: "180px",
  },
  ftBlock: {
    margin: "12% 5% 0px 50px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      width: "75%",
      margin: "auto",
      alignItems: "center",
    },
  },
}));

const featureArr = [
  {
    head: "Simple Bookmarking",
    title: "Bookmark in one click",
    desc: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    img: Tab1,
  },
  {
    head: "Speedy Searching",
    title: " Intelligent search",
    desc: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    img: Tab2,
  },
  {
    head: "Easy Sharing",
    title: "Share your bookmarks",
    desc: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    img: Tab3,
  },
];

const FeatureSection = () => {
  const classes = useStyles();

  const [active, setActive] = useState(featureArr[0]);

  return (
    <div style={{ marginBottom: "15%" }}>
      <div className={classes.titleContainer}>
        <div style={{ maxWidth: "60%" }}>
          <div>
            <Typography variant="h4" className={classes.title}>
              Features
            </Typography>
          </div>
          <div>
            <Typography className={classes.titlePara}>
              Our aim is to make it quick and easy for you to access your
              favourite websites. Your bookmarks sync between your devices so
              you can access them on the go.
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.featureLinksContainer}>
        <Typography
          className={
            active == featureArr[0]
              ? classes.featureLinkActive
              : classes.featureLink
          }
          onClick={() => setActive(featureArr[0])}
        >
          Simple Bookmarking
        </Typography>
        <Typography
          className={
            active == featureArr[1]
              ? classes.featureLinkActive
              : classes.featureLink
          }
          onClick={() => setActive(featureArr[1])}
        >
          Speedy Searching
        </Typography>
        <Typography
          className={
            active == featureArr[2]
              ? classes.featureLinkActive
              : classes.featureLink
          }
          onClick={() => setActive(featureArr[2])}
        >
          Easy Sharing
        </Typography>
      </div>

      <Grid container spacing={5} className={classes.contentContainer}>
        <Grid item xs={12} md={6} className={classes.featuredImgContainer}>
          <img src={active.img} className={classes.featuredImg} />
          <div className={classes.featuredBlob} />
        </Grid>
        <Grid item xs={12} md={6} className={classes.featureDescActive}>
          <div className={classes.ftBlock}>
            <Typography variant="h4" className={classes.featureTitle}>
              {active.title}
            </Typography>

            <Typography className={classes.featureDescPara}>
              {active.desc}
            </Typography>

            <Button
              className={classes.btn__hero}
              variant="contained"
              color="primary"
            >
              <Typography style={{ fontWeight: "600" }}>More Info</Typography>
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default FeatureSection;
