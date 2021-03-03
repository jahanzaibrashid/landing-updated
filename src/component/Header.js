import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
  Container,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import React, { useState, useEffect } from "react";
import LogoItem from "../assets/img/logo.png";
// import LogoItem from "../assets/img/newLogo.png";
import Modal from "./common/Modal";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#00000080",
    padding: "0px 0",
    "@media (max-width: 960px)": {
      paddingLeft: 0,
      paddingRight: 0,
    },
    "@media (max-width: 600px)": {
      padding: "10px 0 0",
    },
  },
  logo: {
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
    maxWidth: "70%",
    "@media (min-width: 960px)": {
      margin: "18px 0",
    },
  },
  menuButton: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 700,
    fontSize: "12px",
    marginLeft: "10px",
    letterSpacing: "4px",
    position: "relative",
    // textTransform:"none"

    "&:last-of-type": {
      "&::after": {
        display: "none",
      },
    },
    // '&::after':{
    //   content: '""',
    //   width: '3px',
    //   height: '3px',
    //   backgroundColor: '#fff',
    //   borderRadius: '50%',
    //   position: 'absolute',
    //   right: '-11px',
    // },
    "@media (min-width: 960px)": {
      borderBottom: "3px solid transparent",
      borderRadius: 0,
      minHeight: "92px",
      "&:first-of-type": {
        color: "#257ce1",
        borderColor: "#257ce1",
      },
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: 0,
    paddingRight: 0,
    "@media (min-width: 960px)": {
      minHeight: "auto",
    },
  },
  drawerContainer: {
    padding: "20px 30px",
    "& li": {
      color: "#fff",
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 700,
      fontSize: "12px",
      letterSpacing: "4px",
    },
  },
  slefcontac: {
    "& .MuiContainer-root": {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },
}));

function Header() {
  const {
    header,
    logo,
    menuButton,
    toolbar,
    drawerContainer,
    slefcontac,
    closeMenuButton,
  } = useStyles();
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const headersData = [
    {
      label: "HOME",
      href: "/",
    },
    {
      label: "REGISTER",
      href: "/#form",
    },
    {
      label: "WHITE PAPER",
      href: "/whitepaper",
    },
    {
      label: "Minty Token",
      href: "/#",
      onclick: () => {
        setOpen(true);
      },
    },
    {
      label: "STAKING MINTY",
      href: "/#",
      onclick: () => {
        setOpen(true)
      },
    },
  ];

  const handleClose = () => {
    setOpen(false);
  };
  //   const handleClickOpen = () => {
  //     setOpen(true);
  // };

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 960
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <div>{getMenuButtons()}</div>
        {/* <div>
          <Button  className={menuButton}>HOME</Button>
          <Button  className={menuButton}>REQUEST INVITATION</Button>
          <Button  className={menuButton}>Buy Minty</Button>
          <Button  className={menuButton}>Stake Minty</Button>
        </div>  */}
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar disableGutters>
        <Container maxWidth="lg">
          <div>{femmecubatorLogo}</div>
          <IconButton
            {...{
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            {...{
              anchor: "right",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <IconButton onClick={handleDrawerClose} className={closeMenuButton}>
              <CloseIcon />
            </IconButton>
            <div className={drawerContainer}>{getDrawerChoices()}</div>
          </Drawer>
        </Container>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, onclick,href }) => {
      return (
        <Link
          href={href}
          {...{
            //   component: RouterLink,
            // to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem style={{ textTransform: "uppercase" }} onClick={onclick}>
            {label}
          </MenuItem>
        </Link>
      );
    });
  };

  const femmecubatorLogo = (
    <Link href="#">
      {" "}
      <img src={LogoItem} alt="logo" className={logo} />{" "}
    </Link>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href, onclick }) => {
      return (
        <Button
          href={href}
          onClick={onclick}
          {...{
            key: label,
            color: "inherit",
            // to: href,
            //   component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>
        <Container maxWidth="lg" className={slefcontac}>
          {mobileView ? displayMobile() : displayDesktop()}
          {open ? <Modal open={open} handleClose={handleClose} /> : null}
        </Container>
      </AppBar>
    </header>
  );
}
export default Header;
