import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
    width:"100%",
    fontFamily:"Montserrat, sans-serif",
    fontSize:"16px",
  },
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

export default function SimplePopover({text}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Button aria-describedby={id} variant="contained" className={classes.root} onClick={handleClick}>
       {text}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>Comming Soon</Typography>
      </Popover>
    </>
  );
}