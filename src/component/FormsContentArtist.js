import React, { Fragment,useState } from 'react';
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

const useStyles = makeStyles({
    formMain:{
        border: '3px solid #fff',
        position: 'relative',
        padding: '50px',
        borderBottom: 0,
        '@media (max-width: 600px)':{
          borderBottom: '3px solid #fff',
        },
        '&::before' :{
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
            '@media (max-width: 600px)':{
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
        '& label':{
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
          '& form':{
            margin: '0 60px',
            padding: '60px 0 85px',
            '@media (max-width: 600px)':{
              margin: '0 0px',
            }
          },
          '& .MuiFormControl-root':{
            marginBottom: '7px',
          }
    },
    smalldivider:{
        backgroundColor: '#fff',
        width: '65px',
        height: '3.5px',
        position: 'relative',
        margin: '50px auto 40px',
        '@media (max-width: 600px)':{
            margin: '30px',
        }
      },
      submitbtn:{
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
        '@media (max-width: 600px)':{
          backgroundColor: '#2274d3',
          color: '#fff',
       
        },
        '& :before':{
            content: '""',
            width:'50%',
            height: '3px',
            backgroundColor: '#2274d3',

        },
        '&.MuiButton-outlinedSecondary:hover':{
            color: '#2274d3',
            borderColor: '#2274d3',
            '@media (max-width: 600px)':{
              backgroundColor: '#2274d3',
              color: '#fff',
           
            },
        }
      },
      borderControlb:{
       
        '&::after':{
          content: '""',
          backgroundColor: '#fff',
          position: 'absolute',
          width: '38.3%',
          left: 0,
          bottom: 0,
          height: '2.5px',
          '@media (max-width: 600px)':{
            display: 'none'
          }
        },
        '&::before':{
            content: '""',
            backgroundColor: '#fff',
            position: 'absolute',
            width: '38.2%',
            right: 0,
            bottom: 0,
            height: '2.5px',
            '@media (max-width: 600px)':{
              display: 'none'
            }
        },
      }
});


export default function FormsContentArtist(){
  const [state, setState] = useState({
    artistName: "",
    artistEmail: "",
  });
    const classes = useStyles();

    const handleChange = (evt) => {
      const value = evt.target.value;
      setState({
        ...state, [evt.target.name]:value
      });
      console.log(state);
    }


    return(
        <Fragment>
            <div className={classes.formMain}>
                <Typography variant="h3" align="center"style={{ whiteSpace: 'pre-line' }} >
                Are you <br /> an Artist?
                </Typography>
                <Divider light="false" variant="middle" className={classes.smalldivider}></Divider>
                <Typography variant="body1" align="center">
                Let us power your creativity
                </Typography>
                <form className={classes.root} noValidate autoComplete="off">
                    <>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="artistName">Name</InputLabel>
                        <Input id="artistName" type="text" name="artistName" value={state.artistName} onChange={handleChange}/>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="artistEmail">E-mail</InputLabel>
                        <Input id="artistEmail" type="email" name="artistEmail" value={state.artistEmail} onChange={handleChange} />
                    </FormControl>
                    </>
                    <Button variant="outlined" color="secondary" className={classes.submitbtn}>
                         Submit
                    </Button>
                </form>
                <div className={classes.borderControlb}></div>
            </div>
        </Fragment>
    );
}
