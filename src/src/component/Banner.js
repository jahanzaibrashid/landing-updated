import React, { Fragment } from 'react';
import {
    Typography, 
    Container, 
    Divider,
    Link,
    Hidden
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Bannerimage from '../assets/img/banner.jpg';
import Envopleimage from '../assets/img/minty.png';
import Mouseimg from '../assets/img/mouse.png';




const useStyles = makeStyles({
    bannermain: {
        background: 'url('+ Bannerimage +') no-repeat bottom',
        height: "100vh",
        width: "100%",
        backgroundSize: 'cover',
      },
      heading: {
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 700,
      },
      themeColor: {
          color: "#257ce1",
      },
      bannerContent: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100vh",
          width: "100%",
          '& h1':{
            color: "#fff",
            fontSize: '22px',
            fontWeight: 900,
            letterSpacing: '3px',
            marginTop: '20px',
            textTransform: 'uppercase',
            lineHeight: '1.3',
            '@media (max-width: 600px)':{
                    fontSize: '14px',
            },
            '& span':{
                fontSize: '34px',
                '@media (max-width: 600px)':{
                    fontSize: '17px',
            },
            }
          },
          '& p': {
              color: "#fff",
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 300,
              maxWidth: '50%',
              '@media (max-width: 960px)':{
                maxWidth: '75%',    
              },
              '@media (max-width: 600px)':{
                maxWidth: '100%',  
                fontSize: '14px'  
              },
              '& span': {
                  fontWeight: 700
              }
          },
          '& img':{
            '@media (max-width: 600px)':{
                maxWidth: '20%',
        },
          }
      },
      smalldivider:{
        backgroundColor: '#fff',
        width: '50px',
        height: '2.5px',
        margin: '70px 0 30px',
        '@media (max-width: 600px)':{
            margin: '30px',
        }
      },
      mousen: {
        marginTop: '40px',
      }
});




export default function Banner() {
    const classes = useStyles();
    return (
        <Fragment >
           <div className={classes.bannermain}>
               <Container maxWidth="lg">
                    <div className={classes.bannerContent}>
                        <img src={Envopleimage} alt="envolpe"/>
                            <Typography variant="h1" align="center" className={classes.heading} >
                                Powered creativity <br /> 
                                <span className={classes.themeColor}>Patronage Recoined. 
                                </span> 
                            </Typography>
                            <Divider light="false" variant="middle" className={classes.smalldivider}></Divider>
                            <Typography variant="body1" variantMapping="p" align="center">
                            Minty is for culture shapers, connoisseurs and art owners. <span fontWeight={700}> We fuel the 
                            creation and appreciation of art that will define a generation. Art is
                            powerful. </span> We harness technology to empower the people that power it. 
                            </Typography>
                            <Hidden mdDown>
                                <Link href="#" className={classes.mousen}>
                                    <img src={Mouseimg} alt="mouse"/> 
                                </Link>
                            </Hidden>
                    </div>
               </Container>
           </div>
        </Fragment>
    );
    
   
  }