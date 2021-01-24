import React from 'react';
import classes from './TextContainerH3.module.css'

const textContainerH3 = (props) => {
    return (
        <div className={classes.textContainer}>
            {props.children}
        </div>
    )
}

export default textContainerH3;