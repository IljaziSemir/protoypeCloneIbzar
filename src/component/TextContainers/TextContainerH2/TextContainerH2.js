import React from 'react';
import classes from './TextContainerH2.module.css'

const textContainer = (props) => {
    return (
        <div className={classes.textContainer}>
            {props.children}
        </div>
    )
}

export default textContainer;