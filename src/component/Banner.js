import React, { Fragment, useState } from "react";
import {
  Typography,
  Container,
  Divider,
  Link,
  Hidden,
  Grid,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Bannerimage from "../assets/img/banner.jpg";
import Envopleimage from "../assets/img/minty.png";
import Mouseimg from "../assets/img/mouse.png";
import PrimaryButton from "./common/buttons/PrimaryButton";

const useStyles = makeStyles({
  bannermain: {
    background: "url(" + Bannerimage + ") no-repeat bottom",
    height: "100vh",
    width: "100%",
    backgroundSize: "cover",
  },
  heading: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 700,
  },
  themeColor: {
    color: "#257ce1",
  },
  bannerContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    paddingTop: "5vh",
    height: "100vh",
    width: "100%",
    "& h1": {
      color: "#fff",
      fontSize: "22px",
      fontWeight: 900,
      letterSpacing: "3px",
      marginTop: "20px",
      textTransform: "uppercase",
      lineHeight: "1.3",
      "@media (max-width: 600px)": {
        fontSize: "14px",
      },
      "& span": {
        fontSize: "34px",
        "@media (max-width: 600px)": {
          fontSize: "17px",
        },
      },
    },
    "& p": {
      color: "#fff",
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 300,
      maxWidth: "50%",
      "@media (max-width: 960px)": {
        maxWidth: "75%",
      },
      "@media (max-width: 600px)": {
        maxWidth: "100%",
        fontSize: "14px",
      },
      "& span": {
        fontWeight: 700,
      },
    },
    "& img": {
      "@media (max-width: 600px)": {
        maxWidth: "20%",
      },
    },
    "& h6": {
      color: "#fff",
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 300,
      // maxWidth: "50%",
    },
  },
  smalldivider: {
    backgroundColor: "#fff",
    width: "50px",
    height: "2.5px",
    margin: "30px 0 30px",
    "@media (max-width: 600px)": {
      margin: "30px",
    },
  },
  mousen: {
    marginTop: "40px",
  },
  mintyActionButtonsContainer: {
    margin: "10px 0 5px 0",
    "& button": {
      marginBottom: "5px",
    },
  },
  checkbox:{
    color: `#DFDFE6`,
  },
  checked:{
    color: `#DFDFE6`,
  },
  checkboxLabel:{
    color: `#ffffff`,
      fontFamily: "Montserrat, sans-serif",
      fontSize: '16px',
      fontWeight: 300,
  }
});

export default function Banner() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.checked);
  };
  return (
    <Fragment>
      <div className={classes.bannermain}>
        <Container maxWidth="lg">
          <div className={classes.bannerContent}>
            <img src={Envopleimage} alt="envolpe" />
            <Typography variant="h1" align="center" className={classes.heading}>
              Powered creativity <br />
              <span className={classes.themeColor}>Patronage Recoined</span>
            </Typography>
            <Divider
              light="false"
              variant="middle"
              className={classes.smalldivider}
            ></Divider>
            <Typography variant="body1" variantMapping="p" align="center">
              Minty is for culture shapers, connoisseurs and art owners.{" "}
              <span fontWeight={700}>
                {" "}
                We fuel the creation and appreciation of art that will define a
                generation. Art is powerful.{" "}
              </span>{" "}
              We harness technology to empower the people that power it.
            </Typography>
            <Hidden mdDown>
              <Link href="#" className={classes.mousen}>
                <img src={Mouseimg} alt="mouse" />
              </Link>
            </Hidden>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={1}
              className={classes.mintyActionButtonsContainer}
            >
              <Grid item md={12}>
                <Typography variant="h6" align="center" justify="center">
                  I hereby confirm I read and accept the privacy policies and
                  token agreement and T&Cs
                </Typography>
              </Grid>

              <Grid item md={12} align="center" justify="center">
                <FormControlLabel
                  control={
                    <Checkbox
                      color="default"
                      classes={{
                        root:classes.checkbox,
                        checked:classes.checked
                      }}
                      onChange={handleChange}
                      color="primary"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                  }
                  label="Read"
                  classes={{label:classes.checkboxLabel}}
                />
              </Grid>
              <Grid item>
                
              </Grid>
            </Grid>

            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={3}
              className={classes.mintyActionButtonsContainer}
            >
              <Grid item xs={12} md={3}>
                <PrimaryButton text="BUY MINTY" />
              </Grid>
              <Grid item xs={12} md={3}>
                <PrimaryButton text="STAKE MINTY" />
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </Fragment>
  );
}
