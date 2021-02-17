import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Theme from '../../../theme/ThemeBranding';
import { Button } from '@material-ui/core/';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: Theme.Color_2AC0E1,
    boxShadow: 'none',
    width: '100%',
    height: '45px',
    fontFamily: Theme.Montserrat,
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '27px',
    color: Theme.Color_FFFFFF,
    textTransform: 'none',
    marginTop: '20px',
  },
}));
const SecondaryButton = ({
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

export default SecondaryButton;
