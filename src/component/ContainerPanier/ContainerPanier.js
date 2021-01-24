import React from 'react';
import classes from './ContainerPanier.module.css'
import imageSachet from '../../assets/images/sachet.webp'

const containerPanier = (props) => {

    return (
        <div className={classes.containerPanier} style={{right: props.panierVisible ? '0' : '-385px' }}>
            <div className={classes.containerTop}>
                <div></div>
                <div>Panier</div>
                {props.croix}
            </div>
            {
                props.quantitePanier ?
                <>
                    <div className={classes.containerMiddle}>
                        <div className={classes.containerImage}>
                            <img src={imageSachet} alt="sachet" />
                        </div>
                        <div>
                            <div>Café Ibzar</div>
                            <div className={classes.prix}>{props.prix} €</div>
                        </div>
                        <div>
                            <div className={classes.delete} onClick={props.supprimerArticlePanier}>Supprimer</div>
                            <input 
                                type="number" 
                                value={props.quantitePanier}
                                min="1" 
                                onChange={(event) => props.modifierQuantiteArticle(+event.target.value)}/>
                        </div>
                    </div>
                    <div className={classes.containerBottom}>
                        <div className={classes.containerTotal}>
                            <div>Sous-total</div>
                            <div>{props.prix * props.quantitePanier} €</div>
                        </div>
                    </div>
                </>
                :
                <div style={{margin:"auto"}}>
                    Votre panier est vide
                </div>
            }
        </div>
    );
};

export default containerPanier;