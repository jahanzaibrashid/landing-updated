import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Dialog,
  Grid,
  Link,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core/";
import { useHistory } from "react-router-dom";

import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
// import Theme from '../../theme/ThemeBranding';
import PrimaryButton from "../common/buttons/PrimaryButton";
import CommingSoon from "../common/buttons/CommingSoon";
import routes from "../../constants/routes.json";

const useStyles = makeStyles((theme) => ({
  ModalContainer: {
    padding: theme.spacing(4),
    // backgroundColor: theme.backgroundColors.D1A1A1B_LFFFFFF,
    display: "flex",
    justifyContent: "center",

    // color:theme.textColors.DFFFFFF_L1A1A1B,
  },
  ModalContainerItem: {
    textAlign: "center",
  },

  ModalContainerItemTextParagraph: {
    padding: "5px",
    // display: "flex",
    justifyContent: "center",
    fontFamily: "Montserrat",
    fontSize: "16px",
  },
  checkboxLabel: {
    fontFamily: "Montserrat !important",
    fontSize: "16px",
    fontWeight: 300,
  },
  //   checkbox: {
  //     color: `#DFDFE6`,
  //   },
  //   checked: {
  //     color: `#DFDFE6`,
  //   },
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
  const history = useHistory();
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (e) => {
    setIsChecked(e.target.checked);
    console.log(isChecked);
  };
  const buyHandler = () => {
    window.open(
      "https://app.uniswap.org/#/swap?inputCurrency=0xb6c6920327b33f8eec26786c7462c5f4098d47e3&outputCurrency=ETH"
    );
    handleClose();
  };

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
                  variant="p"
                  className={classes.ModalContainerItemTextParagraph}
                >
                 
                  I hereby confirm that I unconditionally accept and agree to
                  comply with the {" "}
                  <Link
                    onClick={() => history.push(routes.TOKEN_AGREEMENT)}
                    color="inherit"
                  >
                    <span style={{ color: "#2A7DE1" ,cursor:"pointer" }}>
                      <u>Token Usage Agreement</u>
                    </span>
                  </Link>
                  , the {" "}
                  <Link
                    onClick={() => history.push(routes.PRIVACY_POLICY)}
                    color="inherit"
                  >
                    <span style={{ color: "#2A7DE1",cursor:"pointer" }}>
                      <u>Terms of Use</u>
                    </span>
                  </Link>
                  {" "}
                  and the
                  {" "}
                  <Link
                    onClick={() => history.push(routes.PRIVACY_POLICY)}
                    color="inherit"
                  >
                    <span style={{ color: "#2A7DE1" ,cursor:"pointer"}}>
                      <u>Privacy Policy</u>
                    </span>
                  </Link>
                  {" "}
                  (the “Legal Documents”). I understand that if I do not accept
                  and agree to these Legal Documents, I acknowledge and agree
                  that I shall immediately exit from and not access and/or use
                  the platform.{" "}
                </Typography>

                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        //  checked={isChecked}
                        classes={{
                          root: classes.checkbox,
                          checked: classes.checked,
                        }}
                        onChange={handleChange}
                        value={isChecked}
                        color="primary"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                    }
                    label="Confirm"
                    classes={{ label: classes.checkboxLabel }}
                  />
                </Grid>

                <Grid item>
                  <PrimaryButton
                    text="BUY MINTY"
                    disabled={isChecked ? false : true}
                    onClick={() => buyHandler(handleClose)}
                  />
                </Grid>

                <Grid item>
                  <CommingSoon text="STAKE MINTY" onClick={()=>alert('jhaanzib')} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Dialog>
      </Grid>
    </>
  );
};

export default Modal;
