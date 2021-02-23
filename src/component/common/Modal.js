import { withStyles, makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { Button, Dialog, Grid, Link } from "@material-ui/core/";

import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
 // import Theme from '../../theme/ThemeBranding';
 import PrimaryButton from '../common/buttons/PrimaryButton';


const useStyles = makeStyles((theme) => ({
  ModalContainer: {
    padding: theme.spacing(6),
    // backgroundColor: theme.backgroundColors.D1A1A1B_LFFFFFF,
    display: "flex",
    justifyContent: "center",
    // color:theme.textColors.DFFFFFF_L1A1A1B,
  },
  ModalContainerItem: {
    textAlign: "center",
    "& h4": {
      // fontFamily: Theme.Walkway,
      [theme.breakpoints.down("sm")]: {
        fontSize: "24px",
      },
    },
    "& p": {
      // fontFamily: Theme.Montserrat,
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
    },
  },
  ModalContainerItemTextTitle: {
    padding: "5% 0px",
  },
  ModalContainerItemTextParagraph: {
    padding: "2% 0px",
    display: "flex",
    justifyContent: "center",
  },
  ContainerBalance: {
    display: "flex",
    flexFlow: "row",

    [theme.breakpoints.down("sm")]: {
      flexFlow: "column",
    },
  },
  ItemBalance: {
    padding: theme.spacing(2),
    textAlign: "start",
    "& Button": {
      // fontFamily: Theme.Montserrat,
      [theme.breakpoints.down("sm")]: {
        fontSize: "10px",
        width: "133%",
      },
    },
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const Modal = ({ open, handleClose }) => {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <Grid className={classes.ModalContainer} item>
            <Grid container>
              <Grid item className={classes.ModalContainerItem}>
                <DialogTitle
                  id="customized-dialog-title"
                  onClose={handleClose}
                />
              </Grid>
              <Grid item className={classes.ModalContainerItem}>
                <Typography
                  className={classes.ModalContainerItemTextTitle}
                  variant="h4"
                  gutterBottom
                  align="center"
                >
                  What text to put here ?
                </Typography>
                <Typography
                  className={classes.ModalContainerItemTextParagraph}
                  variant="p"
                  gutterBottom
                >
                  I hereby confirm that I unconditionally accept and agree to
                  comply with the Token Usage Agreement, the Terms of Use and
                  the Privacy Policy (the “Legal Documents”). I understand that
                  if I do not accept and agree to these Legal Documents, I
                  acknowledge and agree that I shall immediately exit from and
                  not access and/or use the platform.{" "}
                </Typography>
                {/* <Typography className={classes.ModalContainerItemTextParagraph} style={{ justifyContent: "start" }} variant="p" gutterBottom>
                                    <Link href="/patrons" color="inherit">
                                        <span style={{ color: "#2A7DE1" }}>
                                            <u>T&C</u>
                                        </span>
                                    </Link>
                                </Typography> */}

                {/* <Grid container className={classes.ContainerBalance}>
                                    <Grid item className={classes.ItemBalance}>
                                        <Typography variant="p" gutterBottom align="start">
                                            Your balance:
                                        </Typography>
                                    </Grid>
                                    <Grid item className={classes.ItemBalance}>
                                        <Grid container direction="row">
                                            <Grid item className={classes.ItemBalance}>
                                                <Typography variant="p" gutterBottom align="start">
                                                    100 000 MINTY
                                                </Typography>
                                            </Grid>
                                            <Grid item className={classes.ItemBalance}>
                                                <Button style={{ backgroundColor:"#28A2F1", color:"white"}} color="#28A2F1" size="medium" variant="contained" onClick={handleClickOpen}>
                                                    Deposit
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid> */}
              </Grid>

             
                <Grid item xs={12} md={3}>
                  <PrimaryButton text="BUY MINTY" />
                </Grid>
                <Grid item xs={12} md={3}>
                  <PrimaryButton text="STAKE MINTY" />
                </Grid>
              </Grid>
          </Grid>
        </Dialog>
      </Grid>
    </>
  );
};

export default Modal;
