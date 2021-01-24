import React from 'react';
import classes from './ContainerImageText.module.css'
import imageTasse from '../../assets/images/image1.png'

const containerImageText = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.divContainer}>
                <img src={imageTasse} alt='tasse'/>
            </div>
            <div className={classes.divContainer}>
                {props.children}
            </div>
        </div>
    )
}

export default containerImageText;