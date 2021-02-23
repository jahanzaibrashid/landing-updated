import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Button } from '@material-ui/core/';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#257ce1',
    width: '100%',
    height: '56px',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '27px',
    color: '#FFFFFF',
    textTransform: 'none',
    borderRadius: '3px',
    '&:hover':{
      backgroundColor:'#000000'
    }
  },
}));
const PrimaryButton = ({
  text,
  onClick,
  className = '',
  style = {},
  startIcon = null,
  endIcon = null,
}) => {
  const classes = useStyles();

  //render jsx
  return (
    <Button
      startIcon={startIcon ? startIcon : null}
      endIcon={endIcon ? endIcon : null}
      size="x-large"
      className={`${classes.root} ${className}`}
      variant="contained"
      onClick={onClick}
      style={style}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
