import React, { Fragment } from 'react';
import Bannerimage from '../assets/img/thirdbanner.png';
import {
    Container,
    Grid,
    makeStyles,
    useMediaQuery,
    useTheme
}
    from '@material-ui/core';
import FormsContentCollector from './FormsContentCollector';
import FormsContentArtist from './FormsContentArtist';


const useStyles = makeStyles({
    formsbg: {
        background: 'url(' + Bannerimage + ') no-repeat center',
        height: "100%",
        width: "100%",
        backgroundSize: 'cover',
        marginTop: '-108px',
        padding: '160px 0 100px',
    },
});


export default function Forms() {
    // const [collectorDisplay, setCollectorDisplay]= useState("block");
    // const [ArtistDisplay, setArtistDisplay]= useState("block");
    // const [state , seState] = useState({
    //     isCollectorSubmitted:false,
    //     isArtistSubmitted:false
    // })
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'), {
        defaultMatches: true
    });
    return (
        <Fragment>
            <div className={classes.formsbg} id="form">
                <Container maxWidth="lg">
                    <Grid container spacing={isMobile ? 0 : 7} direction="row" justify="center">

                        <Grid item md={6}>
                            <FormsContentCollector />
                        </Grid>
                        <Grid item md={6}>
                            <FormsContentArtist />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </Fragment>
    );
}