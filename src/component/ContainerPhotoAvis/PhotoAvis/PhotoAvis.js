import React from 'react';
import classes from './PhotoAvis.module.css'

const photoAvis = (props) => {
    return (
        <div className={classes.containerImageAvis}>
            <div className={classes.containerImage}>
                <img src={props.image} alt={props.altImage} />
            </div>
            <div className={classes.containerAvis}>
                {props.children}
            </div>
        </div>
    )
}

export default photoAvis;