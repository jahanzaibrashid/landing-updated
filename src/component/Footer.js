import React, { Fragment } from 'react';
import {
    makeStyles,
    Container,
    Grid,
    Hidden,
    Typography,
    Link,
    useTheme,
    useMediaQuery
}
from '@material-ui/core';
import footerlogo from '../assets/img/footerlogo.png';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import routes from "../constants/routes.json"


const useStyles = makeStyles({
    footerbg:{
        background: '#257ce1',
        padding: '40px 0',
        '& h5': {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            color: '#fff',
            fontSize: "13px",
            textTransform: 'uppercase',
            letterSpacing: '5px',
            marginBottom: '12px',
        },
        '& a': {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 400,
            color: '#fff',
            fontSize: "14px",
            '@media (max-width: 960px)':{
                textAlign: 'right',
                display: 'block'
            }
        }
    },
    footerlogo: {
        textAlign: 'center',
        '@media (max-width: 960px)':{
            textAlign: 'left',
            '& a':{
                textAlign: 'left',
            }
        },
        '& img': {
            maxWidth: '60%',
            '@media (max-width: 600px)':{
                maxWidth: '90%',
            }
        }
    },
    socialu: {
        '& a': {
            margin: '0 5px',
        }
    },
    footsmallc:{
        marginBottom: '25px'
    }
});


export default function Footer(){
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'), {
        defaultMatches: true
      });
    return(
        <Fragment>
            <div className={classes.footerbg}>
                <Container maxWidth="lg">
                    <Grid container spacing={isMobile ? 0 : 5} alignItems="center"  direction="row">
                        <Hidden smDown>
                            <Grid item md={4}>
                                <Typography variant="h5">
                                  Contact Us
                                </Typography>
                                <Link href="mailto:hello@minty.art">hello@minty.art</Link>
                                <br/>
                                <Link href={routes.TOKEN_AGREEMENT}>Token Usage Agreement</Link>
                                <br/>
                                <Link href={routes.PRIVACY_POLICY}>Privacy Policy</Link>
                                <br/>
                                <Link href={routes.TNC}>T&C</Link>
                            </Grid>
                        </Hidden>
                            <Grid item md={4} xs={6}>
                                <div className={classes.footerlogo}>
                                    <Link href="#">  
                                        <img src={footerlogo} alt="footer logo"/>
                                    </Link>
                                </div>
                            </Grid>
                            <Grid item md={4} xs={6}>
                                <Hidden mdUp>
                                        <Typography variant="h5" align="right" >
                                           Contact Us
                                        </Typography>
                                        <Link href="mailto:hello@minty.art" className={classes.footsmallc}>hello@minty.art</Link>
                                </Hidden>
                                <Typography variant="h5" align="right"> 
                                     Community
                                </Typography>
                                <Grid container direction="row" alignItems="center" justify="flex-end" className={classes.socialu}>
                                    <Link href="https://www.youtube.com/channel/UCBS5ZY7WbUBJXepQ8ReXyFw" style={{marginLeft: 0}}><YouTubeIcon /> </Link>
                                    <Link href="https://twitter.com/minty_nft"><TwitterIcon /> </Link>
                                    <Link href="https://www.instagram.com/minty_nft/"><InstagramIcon /> </Link>
                                </Grid>
                            </Grid>
                    </Grid>
                </Container>
            </div>
        </Fragment>
    );
}