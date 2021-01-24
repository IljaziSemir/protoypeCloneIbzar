import React from 'react';
import classes from './Achat.module.css';
import {withFormik} from 'formik';
import * as Yup from 'yup';
import imageSachet from '../../assets/images/sachet.webp';
import Button from '../Button/Button';

const achat = (props) => {

    return (
        <div className={classes.containerAchat} id={props.id}>
            <div className={classes.containerDivAchat}>
                <img src={imageSachet} alt="sachet"/>
            </div>
            <div className={classes.containerDivAchat}>
                <div className={classes.noteAvisPrix}>
                    <h2>Café Ibzar</h2>
                    <div className={classes.moyenneAvis}>
                        {props.moyenneNoteStar}
                        <span style={{color:"black", fontSize:"15px"}}>{props.avis.length} avis</span>
                    </div>
                    <div>{props.prix} €</div>
                </div>
                <div className={classes.inputButton}>
                    <div>
                        <label className={classes.quantityLabel} forhtml="quantity">Quantité</label>
                        <input 
                            type="number" 
                            min="1" 
                            id="quantiteCommande"
                            name="quantiteCommande"
                            className={classes.inputQuantité}
                            value={props.values.quantiteCommande}
                            onChange={(event) => props.setFieldValue('quantiteCommande', +event.target.value)} />
                    </div>
                    <Button
                        clic={props.handleSubmit}
                        style={{
                            backgroundColor: "#A02123",
                            color: "white",
                            width: "175px",
                            height: "45px"
                        }}
                    >Ajouter au panier</Button>
                </div>
                {
                    props.ajoutArticle ?
                    <div>
                        Article ajouté au panier.
                    </div>
                    :
                    <div></div>
                    }
            </div>
        </div>
    )
}

export default withFormik ({
    mapPropsToValues : () => ({
        quantiteCommande:'',
    }),
    validationSchema : Yup.object().shape({
        quantiteCommande : Yup.number()
            .moreThan(0,'La note ne peut être inférieur à 1')
            .required('Le champ est obligatoire'),
    }),
    handleSubmit: (values,{props}) => {
        props.validation(values.quantiteCommande);
    },
}) (achat);