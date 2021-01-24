import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import classes from '../Header/Header.module.css';
import imageBgMontagne from '../../assets/images/montagne.jpg';
import NavBar from '../NavBar/Navbar';
import TextContainerH2 from '../TextContainers/TextContainerH2/TextContainerH2';
import LineIbzar from '../LineIbzar/LineIbzar';
import Button from '../Button/Button';

const header = (props) => {
    return (
        <div className={classes.bgHeader} style={{backgroundImage:`url(${imageBgMontagne})`}}>
            <NavBar 
                {...props}
                supprimerArticlePanier={props.supprimerArticlePanier}
                modifierQuantiteArticle={props.modifierQuantiteArticle}
            />
            <TextContainerH2>
                <LineIbzar />
                <h2 style={{color:"white"}}>La plus ancienne boisson énergisante </h2>
                <p style={{color:"white", textAlign:"center"}}>
                    Ibzar booste votre énergie, humeur et système immunitaire. Le Café Ibzar infusé aux 
                    épices vous donne le coup de pouce dont vous avez besoin pour accomplir votre
                    journée et favorise la bonne santé du cerveau, du cœur et du corps.
                </p>
                <Link to="/#achat" style={{textDecoration:"none"}}>
                    <Button 
                        style={{
                            backgroundColor: "#A02123",
                            color: "white",
                            width: "175px",
                            height: "45px"
                        }}
                    >Acheter Ibzar</Button>
                </Link>
            </TextContainerH2> 
        </div>
    )
}

export default header;