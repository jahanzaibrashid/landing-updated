import React, { Fragment, useState, } from 'react';
import {
  Typography,
  Divider,
  FormControl,
  InputLabel,
  Input,
  makeStyles,
  Button
}
  from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles({
  formMain: {
    border: '3px solid #fff',
    position: 'relative',
    padding: '50px',
    borderBottom: 0,
    '@media (max-width: 600px)': {
      borderBottom: '3px solid #fff',
    },
    '&::before': {
      content: '""',
      width: '100%',
      height: '100%',
      background: '#00000080',
      position: 'absolute',
      top: '15px',
      left: '15px',
      right: '0',
      bottom: '0'
    },
    '@media (max-width: 960px)': {
      margin: '50px 0'
    },
    '& h3': {
      color: '#fff',
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 900,
      fontSize: '28px',
      textTransform: 'uppercase',
      letterSpacing: '3px',
      position: 'relative',
      '@media (max-width: 1280px)': {
        fontSize: '26px'
      },
      '@media (max-width: 600px)': {
        fontSize: '18px'
      }
    },
    '& p': {
      color: '#fff',
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 600,
      fontSize: '16px',
      position: 'relative',
    },
    '& label': {
      color: '#fff',
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 600,
      fontSize: '14px',
    },
    '& input': {
      color: '#fff',
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 600,
      fontSize: '14px',
    },
    '& label.Mui-focused': {
      color: '#fff',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fff',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#fff',
    },
    '& .MuiInput-underline:hover:before': {
      borderBottomColor: '#fff',
    },
    '& .MuiOutlinedInput-root': {
      color: '#fff',
    },
    '& .MuiInputBase-root': {
      color: '#fff',
    },
    '& form': {
      margin: '0 60px',
      padding: '60px 0 85px',
      '@media (max-width: 600px)': {
        margin: '0 0px',
      }
    },
    '& .MuiFormControl-root': {
      marginBottom: '7px',
    }
  },
  smalldivider: {
    backgroundColor: '#fff',
    width: '65px',
    height: '3.5px',
    margin: '50px auto 40px',
    position: 'relative',
    '@media (max-width: 600px)': {
      margin: '30px',
    }
  },
  submitbtn: {
    borderColor: '#2274d3',
    color: '#2274d3',
    borderRadius: 0,
    position: 'absolute',
    bottom: '-25px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '4px 25px 58px',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 600,
    fontSize: '16px',
    letterSpacing: '3px',
    '@media (max-width: 600px)': {
      backgroundColor: '#2274d3',
      color: '#fff',

    },
    '& :before': {
      content: '""',
      width: '50%',
      height: '3px',
      backgroundColor: '#2274d3',

    },
    '&.MuiButton-outlinedSecondary:hover': {
      color: '#2274d3',
      borderColor: '#2274d3',
      '@media (max-width: 600px)': {
        backgroundColor: '#2274d3',
        color: '#fff',

      },
    }
  },
  borderControlb: {

    '&::after': {
      content: '""',
      backgroundColor: '#fff',
      position: 'absolute',
      width: '38.3%',
      left: 0,
      bottom: 0,
      height: '2.5px',
      '@media (max-width: 600px)': {
        display: 'none'
      }
    },
    '&::before': {
      content: '""',
      backgroundColor: '#fff',
      position: 'absolute',
      width: '38.2%',
      right: 0,
      bottom: 0,
      height: '2.5px',
      '@media (max-width: 600px)': {
        display: 'none'
      }
    },
  }
});



export default function FormsContent() {

  const [result, setResult] = useState(null);
  const [state, setState] = useState({
    first_name: "",
    email: "",
    collector:"collector",
    source:"source"

  });
  const [visibility, setVisibility] = useState("block");
  const classes = useStyles();

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state, [evt.target.name]: value
    });
    console.log(state)
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if(state.first_name!=="" && state.email!==""){
      axios.post('/mail-json/', state).then(response => {
        setResult(response.data);
        setState({
          ...state,
          first_name: "",
          email: ""
        });
        setVisibility("none");
      })
        .catch((err) => {
          console.log(err);
          setResult({
            success: false,
            message: "something went wrong"
          });
        });
    }
  }
  return (
    <Fragment>
      <div className={classes.formMain}>
        <Typography variant="h3" align="center" style={{ whiteSpace: 'pre-line' }} >
          Are you <br /> an art collector?
                </Typography>
        <Divider light="false" variant="middle" className={classes.smalldivider}></Divider>
        <Typography variant="body1" align="center">
          Power Art’s Next Big Thing
          </Typography>
        <form className={classes.root} noValidate autoComplete="off" onSubmit={(e) => submitHandler(e)}>
          <input type="hidden" name={state.collector} value="yes" />
          <input type="hidden" name={state.source} value="patron page 7 JAN 2020" />
          <div style={{ display: visibility }}>
            <FormControl fullWidth>
              <InputLabel htmlFor="first_name">Name</InputLabel>
              <Input id="first_name" type="text" name="first_name" value={state.first_name} onChange={handleChange} />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="email">E-mail</InputLabel>
              <Input id="email" type="email" name="email" value={state.email} onChange={handleChange} />
            </FormControl>
            <Button variant="outlined" color="secondary" type="submit" className={classes.submitbtn}>
              Submit
          </Button>
          </div>
          {visibility == "none" ?
            <Typography variant="body1" align="center">
              Thank you
          </Typography> : null}

        </form>

        <div className={classes.borderControlb}></div>
      </div>
    </Fragment>
  );
}
