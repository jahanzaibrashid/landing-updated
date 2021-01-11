import React, { Fragment } from 'react';
import {
    makeStyles
}
from '@material-ui/core';
import Middleimage from '../assets/img/secondbanner.png';
import MiddleContent from './MiddleContent';


const userStyles = makeStyles({

    middlebg:{
        background: 'url('+ Middleimage +') no-repeat center',
        height: "100%",
        width: "100%",
        backgroundSize: 'cover',
        padding: '230px 0',
        position: 'relative',
        zIndex: 99
    }

});

const middleContent = {
    content: [
        {title: "Patronage and marketplace",
        subtitle: "Artists find patrons to fund and bring to life new ideas, connect with passionate collectors and sell your finished work.",
        paragrapth: "Patrons empower artists you love and commission them to create something new and wonderful. Access exclusive perks and follow progress of your favourite artists."
         },
         {title: "Visualise best in-class art",
         subtitle: "Browse and discover new NFT art pieces.",
         paragrapth: "Explore curated creations and artists that move the four corners of the world."
          },
          {title: "Trade art digitally",
          subtitle: "Benefit from the rising value of the art you create by receiving royalties every time a token of your artwork is sold.",
          paragrapth: "Access our worldwide network of patrons and collectors to grow and extend your audience."
           },
    ]
}

export default function Middle(){
    const classes = userStyles();
    return(
        <Fragment>
                <div className={classes.middlebg}>
                    <MiddleContent heading={middleContent.content[0].title} subheading={middleContent.content[0].subtitle} content={middleContent.content[0].paragrapth}/>    
                    <MiddleContent heading={middleContent.content[1].title} subheading={middleContent.content[1].subtitle} content={middleContent.content[1].paragrapth}/>    
                    <MiddleContent heading={middleContent.content[2].title} subheading={middleContent.content[2].subtitle} content={middleContent.content[2].paragrapth}/>    
                 
                </div>
        </Fragment>
    );
}