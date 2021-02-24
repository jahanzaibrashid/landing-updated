import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";

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
    
    },
    // "& p": {
    //   fontFamily: "Montserrat, sans-serif",
    //   fontWeight: 400,
    //   color: "#fff",
    //   fontSize: "16px",
    //   maxWidth: "48%",
    //   "@media (max-width:960px)": {
    //     maxWidth: "100%",
    //   },
 
  },

  preCl: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    color: "#fff",
    fontSize: "16px",
    maxWidth: "80%",
  },
});




export default function Privacy(props) {
  const classes = userStyles();
  return (
    <>
    <iframe src="https://docs.google.com/document/d/15wWOBLGs6lZXUQHtOXMucxJyZOkYPV6G/edit" width='99%' height='714'></iframe>
    </>
  );
}
