import React from 'react';
import classes from './Avis.module.css';
import IconChevronLeft from '../Icons/Chevron/ChevronLeft/ChevronLeft';
import IconChevronRight from '../Icons/Chevron/ChevronRight/ChevronRight';
import MessageAvis from './MessageAvis/MessageAvis';
import Button from '../Button/Button'
import AjoutFormulaireAvis from './AjoutFormulaireAvis/AjoutFormulaireAvis';
import IconStar from '../Icons/Star/Star'

const avis = (props) => {

    const printStars = (n) => {
        let stars = [];
        for (let i = 0; i < n; i++){
            stars.push(<IconStar key={i}/>);
        }
        return <div>{stars}</div>
    }

    return (
        <>
        <div className={classes.avis}>
            <div className={classes.containerStarsAvis}>
                {props.moyenneNoteStar}
                {props.avis.length} avis
            </div>
            <div className={classes.containerMessageAvis}>
                <IconChevronLeft clicPrecedent={props.clicPrecedent}/>
                {
                    props.avis
                        .filter(user => user.id === props.printUser)
                        .map(user => {
                            return (
                                <MessageAvis 
                                    nom={user.nom}
                                    note={printStars(user.note)}
                                    titre={user.titre}
                                    texte={user.texte}
                                />
                            )
                        })
                }
                <IconChevronRight clicSuivant={props.clicSuivant}/>
            </div>
            <Button 
                clic={props.clicFormulaire}
                style={{
                    backgroundColor: "#A02123",
                    color: "white",
                    width: "175px",
                    height: "45px"
                }}
            >Laisser un avis</Button>
        </div>
            {props.formulaire && 
            <AjoutFormulaireAvis 
                clicCroix={props.clicCroixFormulaire}
                validation={props.ajoutAvis()}
            />}
        </>
    ); 
};

export default avis;