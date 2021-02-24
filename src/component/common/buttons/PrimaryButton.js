import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Button } from '@material-ui/core/';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#2274d3',
    width: '50%',
    height: '50px',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '27px',
    color: '#FFFFFF',
    textTransform: 'none',
    borderRadius: '3px',
    marginBottom:"8px",
    '&:hover':{
      backgroundColor:'#000000',
    },
    [theme.breakpoints.down("sm")]: {
      width: '100%',
    },
  },
}));
const PrimaryButton = ({
  text,
  onClick,
  className = '',
  style = {},
  startIcon = null,
  endIcon = null,
  disabled=false,
  href
}) => {
  const classes = useStyles();

  //render jsx
  return (
    <>
    <Button
      startIcon={startIcon ? startIcon : null}
      endIcon={endIcon ? endIcon : null}
      size="x-large"
      href={href}
      className={`${classes.root} ${className}`}
      variant="contained"
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {text}
    </Button>
    </>
  );
};

export default PrimaryButton;
