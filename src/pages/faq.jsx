import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Arrow from "../images/icon-arrow.svg";

const useStyles = makeStyles((theme) => ({
  app: {
    display: "flex",
  },
  titleText: {
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
    marginBottom: "15%",
    color: "hsl(229, 8%, 60%)",
    fontSize: "1rem",
    fontWeight: "600",
  },
  card: {
    borderRadius: "15px",
    width: "40%",
    marginBottom: "2.5%",
  },
  AppHeader: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    marginTop: "10%",
    marginBottom: "10%",
  },
  question: {
    cursor: "pointer",
    fontSize: "1rem",
  },
  closed: {
    display: "none",
  },
  open: {
    display: "block",
    fontSize: "1rem",
    padding: "2%",
    lineHeight: "1.55em",
  },
  keyContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "2%",
  },
  arrowImg: {
    height: "16px",
    width: "20px",
    display: "inline-block",
  },
  btn__faq: {
    textTransform: "none",
    marginTop: "20px",
    padding: "15px",
    fontSize: ".8rem",
    fontWeight: "600",
    width: "7rem",
  },
}));
// import "./App.css";

const faqs = [
  {
    question: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    question: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

function Faq() {
  const [selectedQuestion, toggleQuestion] = useState(-1);

  function openQuestion(index) {
    toggleQuestion(selectedQuestion === index ? -1 : index);
  }
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <header className={classes.AppHeader}>
        <div className={classes.card}>
          <div>
            <Typography className={classes.titleText}>
              Frequently Asked Questions
            </Typography>
            <Typography className={classes.titlePara}>
              Here are some of our FAQs. If you have any other questions you’d
              like answered please feel free to email us.{" "}
            </Typography>
            <hr></hr>
            {faqs.map(({ question, answer }, index) => (
              <div key={`item-${index}`}>
                <div className={classes.keyContainer}>
                  <Typography
                    className={classes.question}
                    onClick={() => openQuestion(index)}
                  >
                    {question}
                  </Typography>
                  <img src={Arrow} className={classes.arrowImg} />
                </div>
                <Typography
                  className={`${
                    selectedQuestion === index ? classes.open : classes.closed
                  }`}
                >
                  {answer}
                </Typography>
                <hr></hr>
              </div>
            ))}
          </div>
        </div>
        <Button
          variant="contained"
          color="primary"
          className={classes.btn__faq}
        >
          More info
        </Button>
      </header>
    </div>
  );
}

export default Faq;
