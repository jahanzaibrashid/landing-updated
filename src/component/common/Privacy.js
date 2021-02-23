import React, { Fragment } from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import pdf from '././../../assets/pdf/PrivacyPolicy.pdf';
import { PrivacyPolicyText } from "../../constants/privacyData";
// import { PrivacyPolicyText } from "./htmlPagesForMinty/pp.html";

const userStyles = makeStyles({
  middlecontentm: {
    position: "relative",
    paddingTop: "50px",
    // paddingLeft: '38px',
    margin: "50px 0",
    // marginLeft: '80px',
    "& h6": {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 700,
      color: "#fff",
      fontSize: "16px",
      maxWidth: "48%",
      margin: "20px 0 15px",
      "@media (max-width:960px)": {
        maxWidth: "100%",
      },
      "@media (max-width: 600px)": {
        maxWidth: "100%",
        fontSize: "14px",
      },
    },
    "& p": {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 400,
      color: "#fff",
      fontSize: "16px",
      maxWidth: "48%",
      "@media (max-width:960px)": {
        maxWidth: "100%",
      },
      "@media (max-width: 600px)": {
        maxWidth: "100%",
        fontSize: "14px",
      },
    },
  },
  transheading: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 900,
    color: "#257ce12b",
    fontSize: "32px",
    textTransform: "uppercase",
    letterSpacing: "3px",
    position: "absolute",
    top: "5px",
    
  },
  preCl: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    color: "#fff",
    fontSize: "16px",
    maxWidth: "80%",
  },
});

function createMarkup() {
    return {__html: '<iframe src="assets/pdf/PrivacyPolicy.pdf" width="540" height="450"></iframe>'};
  }


export default function Privacy(props) {
  const classes = userStyles();
  console.log(createMarkup())
  return (
    <>
    <iframe src={pdf} width='540' height='450'></iframe>
      {/* <Container maxWidth="lg">
          <div dangerouslySetInnerHTML={createMarkup()}></div> */}
        {/* <div className={classes.middlecontentm}>
          <Typography variant="h6">Jahanzaib</Typography>
          <pre>Hello ,dsfasdfads World .</pre>

          <pre className={classes.preCl}> {PrivacyPolicyText.data}</pre>
          <iframe src="../../assets/pdf/PrivacyPolicy.pdf" width="100%" height="800vh"></iframe>

          <Typography variant="body1">
                        {PrivacyPolicyText.data}
                        </Typography>
        </div> */}
      {/* </Container> */}
    </>
  );
}
