import React from 'react';
import classes from './MessageAvis.module.css'

const messageAvis = (props) => {
    return (
        <div className={classes.containerMessage}>
            <div className={classes.one}>
            <div className={classes.containerNomNote}>
                <div className={classes.nom}>{props.nom}</div>
                <div className={classes.stars}>{props.note}</div>
            </div>
            </div>
            <div className={classes.two}><div className={classes.titreAvis}>{props.titre}</div></div>
            <div className={classes.four}><div className={classes}>{props.texte}</div></div>
        </div>
    )
}

export default messageAvis;