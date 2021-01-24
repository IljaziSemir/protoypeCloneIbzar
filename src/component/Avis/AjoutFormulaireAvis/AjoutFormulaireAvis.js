import React from 'react';
import classes from './AjoutFormulaireAvis.module.css';
import Button from '../../Button/Button'
import IconCroix from '../../Icons/Croix/Croix';
import {withFormik} from 'formik';
import * as Yup from 'yup';

const ajoutFormulaireAvis = (props) => {
    return (
        <div className={classes.containerFormulaire}>
            <form className={classes.formulaire}>
                <IconCroix class={classes.croix} clicCroix={props.clicCroix}/>
                <div className={classes.divInput}>
                    <input 
                        placeholder="Votre nom"
                        type="text"
                        id="nom"
                        name="nom"
                        value={props.values.nom}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                    ></input>
                    {
                        props.errors.nom && props.touched.nom
                        && <span className={classes.messageErreur}>{props.errors.nom}</span>
                    }
                </div>
                <div className={classes.divInput}>
                    <input 
                        className={classes.inputNote}
                        placeholder="Votre note"
                        type="number"
                        id="note"
                        name="note"
                        min="1"
                        max="5"
                        value={props.values.note}
                        onChange={(event) => props.setFieldValue('note', +event.target.value)}
                        onBlur={props.handleBlur}
                    ></input>
                    {
                        props.errors.note && props.touched.note
                        && <span className={classes.messageErreur}>{props.errors.note}</span>
                    }
                </div>
                <div className={classes.divInput}>
                    <input 
                        placeholder="Titre de l'avis"
                        type="text"
                        id="titre"
                        name="titre"
                        value={props.values.titre}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                    ></input>
                    {
                        props.errors.titre && props.touched.titre
                        && <span className={classes.messageErreur}>{props.errors.titre}</span>
                    }
                </div>
                <div className={classes.divInput}>
                    <textarea 
                        placeholder="Votre avis"
                        type="text"
                        id="texte"
                        name="texte"
                        rows="5" 
                        cols="55"
                        value={props.values.texte}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                    ></textarea>
                    {
                        props.errors.texte && props.touched.texte
                        && <div className={classes.messageErreur}>{props.errors.texte}</div>
                    }
                </div>
                <Button 
                    clic={props.handleSubmit}
                    style={{
                        backgroundColor:"#A02123",
                        color:"white",
                        width:"100px",
                        height:"30px"
                    }}
                >Envoyer</Button>
            </form>
        </div>
    );
};

export default withFormik ({
    mapPropsToValues : () => ({
        nom:'',
        note:'',
        titre:'',
        texte:''
    }),
    validationSchema : Yup.object().shape({
        nom : Yup.string()
            .min(3, 'Le nom doit contenir plus de 3 caractères')
            .max(15, 'Le nom doit contenir moins de 15 caractères')
            .required('Le champ est obligatoire'),
        note : Yup.number()
            .lessThan(6,'La note ne peut être supérieur à 5')
            .moreThan(0,'La note ne peut être inférieur à 1')
            .required('Le champ est obligatoire'),
        titre : Yup.string()
            .min(3, 'Le titre doit contenir plus de 3 caractères')
            .max(30, 'Le titre doit contenir moins de 30 caractères')
            .required('Le champ est obligatoire'),
        texte : Yup.string()
            .min(3, 'Le message doit contenir plus de 3 caractères')
            .max(300, 'Le titre doit contenir moins de 300 caractères')
            .required('Le champ est obligatoire'),
    }),
    handleSubmit: (values,{props}) => {
        props.validation(values.nom,values.note,values.titre,values.texte);
    },
}) (ajoutFormulaireAvis);