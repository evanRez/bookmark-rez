import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Tab1 from "../images/illustration-features-tab-1.svg";

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
    paddingBottom: "30px",
    borderBottom: "1px solid #e3e4e8",
    fontWeight: "500",
    color: "hsl(229, 8%, 60%)",
  },
  featureLink: {
    fontSize: "1rem",
  },
  featureImg: {
    display: "none",
  },
  featureDesc: {
    display: "none",
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
    postion: "absolute",
  },
  featuredBlob: {
    postion: "absolute",
    width: "100%",
    height: "104%",
    backgroundColor: "hsl(231, 69%, 60%)",
    margin: "-48% 50% 50% -20%",
    borderBottomRightRadius: "170px",
  },
}));

const FeatureSection = () => {
  const classes = useStyles();

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
            <Typography className={classes.titlePara} variant="p">
              Our aim is to make it quick and easy for you to access your
              favourite websites. Your bookmarks sync between your devices so
              you can access them on the go.
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.featureLinksContainer}>
        <Typography className={classes.featureLink}>
          Simple Bookmarking
        </Typography>
        <Typography className={classes.featureLink}>
          Speedy Searching
        </Typography>
        <Typography className={classes.featureLink}>Easy Sharing</Typography>
      </div>

      <Grid container spacing={5} className={classes.contentContainer}>
        <Grid item xs={12} md={6} className={classes.featuredImgContainer}>
          <img src={Tab1} className={classes.featuredImg} />
          <div className={classes.featuredBlob} />
        </Grid>
        <Grid item xs={12} md={6} className={classes.featureDescActive}>
          <div
            style={{
              margin: "12% 5% 0px 50px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h4" className={classes.featureTitle}>
              Bookmark in one click
            </Typography>

            <Typography
              style={{ marginBottom: "10px" }}
              variant="p"
              className={classes.featureDescPara}
            >
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
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

        <div className={classes.featureDesc}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" className={classes.featureDesc}>
              Intelligent search
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <Typography variant="p" className={classes.featureImg}>
                Our powerful search feature will help you find saved sites in no
                time at all. No need to trawl through all of your bookmarks.
              </Typography>
            </div>

            <Button>More Info</Button>
          </Grid>
        </div>
        <div className={classes.featureDesc}>
          <Grid item xs={12} md={6} className={classes.featureDesc}>
            <Typography variant="h4" className={classes.featureDesc}>
              Share your bookmarks
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="p" className={classes.featureImg}>
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button.
            </Typography>
            <Button>More Info</Button>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default FeatureSection;
