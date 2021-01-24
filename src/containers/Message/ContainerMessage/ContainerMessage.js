import React, { Component } from 'react';
import classes from './ContainerMessage.module.css'

class ContainerMessage extends Component {
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.header}><span>Ibzar</span></div>
                <input type={'text'} ></input>
            </div>
        );
    };
};

export default ContainerMessage;