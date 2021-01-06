import React, { Fragment } from 'react';
import {
    Container,
    makeStyles,
    Typography
}
from '@material-ui/core';

const userStyles = makeStyles({
    middlecontentm:{
        position: 'relative',
        paddingLeft: '38px',
        margin: '50px 0',
        marginLeft: '80px',
        '&::before' :{
            content: '""',
            backgroundColor: '#257ce1',
            width: '3.5px',
            height: '83px',
            position: 'absolute',
            left: '0',

        },
        '@media (max-width:960px)': {
            marginLeft: '0px',
            paddingLeft: '0px',
            textAlign: 'center',
            '&::before':{
                display: 'none',
            }
        },
        '& h3':{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 900,
            color: '#257ce1',
            fontSize: "20px",
            textTransform: 'uppercase',
            letterSpacing: '3px',
            position: 'relative',
            '@media (max-width: 960px)': {
                '&::before' : {
                    content: '""',
                    backgroundColor: '#257ce1',
                    height: '3.5px',
                    width: '60px',
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    bottom: '-12px'
        
                },
            }
            },
            '& h6':{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                color: '#fff',
                fontSize: "16px",
                maxWidth: '48%',
                margin: '20px 0 15px',
                '@media (max-width:960px)': {
                    maxWidth: '100%',
                },
                '@media (max-width: 600px)': {
                    maxWidth: '100%',
                    fontSize: '14px'
                }
                },
                '& p':{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 400,
                    color: '#fff',
                    fontSize: "16px",
                    maxWidth: '48%',
                    '@media (max-width:960px)': {
                        maxWidth: '100%',
                    },
                    '@media (max-width: 600px)': {
                        maxWidth: '100%',
                        fontSize: '14px'
                    }
                    },
                
      },
      transheading:{
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 900,
        color: '#257ce12b',
        fontSize: "32px",
        textTransform: 'uppercase',
        letterSpacing: '3px',
        position: 'absolute',
        top: '5px',
        '@media (max-width:960px)': {
            left: '50%',
            top: '-16px',
            transform: 'translateX(-50%)',
            width: '100%'
        },
        '@media (max-width:600px)': {
            fontSize: "23px",
        },
      }
});


export default function MiddleContent(props){
    const classes = userStyles();
    return(
        <Fragment>
                <Container maxWidth="lg">
                    <div className={classes.middlecontentm}>
                        <Typography variant="h3">
                             {props.heading}
                        </Typography>
                        <Typography variant="h4" className={classes.transheading}>
                        {props.heading}
                        </Typography>
                        <Typography variant="h6">
                        {props.subheading}
                        </Typography>
                        <Typography variant="body1">
                        {props.content}
                        </Typography>
                    </div>
                </Container>
        </Fragment>
    );
}