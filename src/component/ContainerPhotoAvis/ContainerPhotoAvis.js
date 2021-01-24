import React from 'react';
import classes from './ContainerPhotoAvis.module.css'
import PhotosAvis from './PhotoAvis/PhotoAvis'
import imageTasseIbzar from '../../assets/images/imageTasseIbzar.jpg'
import imageSachetIbzar from '../../assets/images/sachetIbzar.jpg'

const containerPhotoAvis = (props) => {
    return (
        <div className={classes.photoAvis}>
            <PhotosAvis  image={imageTasseIbzar} imageAlt="tasse">
                <h3 style={{fontSize:"25px"}}>L'avis de Khadija en Cuisine sur Ibzar</h3>
                <p>
                    "Ai-je été convertie en buveuse de café ? La réponse est oui ! 😝
                    Ceux qui me connaissent suffisamment savent que je ne suis pas trop fan de café 
                    (sauf en pâtisserie et en exfoliant visage/corps 😂 😂 😂) mais depuis que j'ai testé Ibzar, 
                    j'ai changé d'avis 🤯
                </p>
                <p>
                    Ibzar est une marque éthique qui propose du café épicé traditionnel marocain 🇲🇦 
                    Elle ravive une recette ancestrale composée d'un savant mélange de 9 épices : 
                    cannelle, badiane, anis, poivre blanc, gingembre, clous de girofle, cardamome, 
                    noix de muscade et sésame. Graaaaaande fan d'épices que je suis, j'ai été conquise 😍
                </p>
            </PhotosAvis>
            <PhotosAvis image={imageSachetIbzar} imageAlt="sachet">
                <h3 style={{fontSize:"25px"}}>L'avis des Sœurs Coffee Addicts</h3>
                <p>
                    "Un vrai délice. J'avais des aprioris sur le mélange version chai, mais vraiment ça se 
                    marie super bien et la saveur reste bien présente à la fin c'est vraiment kiffant." — @lessopic
                </p>
                <p>
                    "Alors je connaissais pas du tout le café marocain épicé, et sincèrement 
                    je suis vraiment surprise, c'est très bon.
                    Un blend de robusta et d'Arabica mélangé à 9 épices (je suis a la base pas très 
                    fan de l'anis et là le goût est très léger).<br />
                    Du coup je vous le conseille." — @bomi.pic
                </p>
            </PhotosAvis>
        </div>
    )

}

export default containerPhotoAvis;