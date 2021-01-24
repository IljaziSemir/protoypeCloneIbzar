import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import axios from 'axios';
import Header from '../../component/Header/Header';
import SpaceBetweenComponent from '../../component/SpaceBetweenComponent/SpaceBetweenComponent';
import LineIbzar from '../../component/LineIbzar/LineIbzar';
import Button from '../../component/Button/Button';
import TextContainerH2 from '../../component/TextContainers/TextContainerH2/TextContainerH2';
import TextContainerH3 from '../../component/TextContainers/TextContainerH3/TextContainerH3';
import ContainerImageText from '../../component/ContainerImageText/ContainerImageText';
import IconStar from '../../component/Icons/Star/Star'
import Avis from '../../component/Avis/Avis';
import ContainerPhotoAvis from '../../component/ContainerPhotoAvis/ContainerPhotoAvis';
import Achat from '../../component/Achat/Achat';
import Footer from '../../component/Footer/Footer'

class Accueil extends Component {
    state = {
        avis : [ 
                {
                    id:0,
                    nom : "",
                    note : 0,
                    titre : "",
                    texte : ""
                }
        ],
        printUser : 1,
        formulaire : false,
        prix:15,
        quantiteCommande:0,
        quantitePanier:0,
        ajoutArticle:false
    }

    componentDidMount = () => {
        axios.get("https://cloneibzar-default-rtdb.firebaseio.com/avis.json")
            .then(response => {
                const avis = Object.values(response.data)
                this.setState({
                    avis
                })
            })
            .catch(error => {
                console.log(error)
                this.setState({
                });
            })
            this.timerID = setInterval(() => this.setState(this.handleAvisSuivant()),5000)
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    };

    handleAjoutAvis = (nom, note, titre, texte) => {
        const newListeAvis = [...this.state.avis];

        let lastIdUser = 0

        for (const id in newListeAvis){
            lastIdUser = newListeAvis[id].id
        }

        const user = {
            id:lastIdUser +1,
            nom:nom,
            note:note,
            titre:titre,
            texte:texte
        };

        newListeAvis.push(user);
        axios.post('https://cloneibzar-default-rtdb.firebaseio.com/avis.json',user)
            .then(response => {
                this.setState (oldState => {
                    return {
                        avis:newListeAvis,
                        formulaire:false,
                        loading:false
                    }
                })
            })
            .catch(error => {
                console.log(error)
                this.setState({loading:false})
            })
    }

    handleAvisPrecedent = () => {
        this.setState(oldState => {
            let newPrintUser = oldState.printUser
            if (oldState.printUser <= 1) newPrintUser = this.state.avis.length 
            else newPrintUser --;
            return {printUser:newPrintUser}
        })
    }

    handleAvisSuivant = () => {
        this.setState(oldState => {
            let newPrintUser = oldState.printUser
            if (oldState.printUser >= this.state.avis.length) newPrintUser = 1
            else newPrintUser ++;
            return {printUser:newPrintUser}
        })
    }

    moyenneNote = () => {
        let moyenneNote = 0
        const note = this.state.avis
        for (let noteUser in note){
            moyenneNote += note[noteUser].note
        }
        moyenneNote /= this.state.avis.length
        return Math.round(moyenneNote)
    }

    printStars = (n) => {
        let stars = [];
        for (let i = 0; i < n; i++){
            stars.push(<IconStar key={i}/>);
        }
        return <div>{stars}</div>
    }

    ajoutQuantiteCommande = (quantiteCommande) => {

        let newQuantitePanier = this.state.quantitePanier + +quantiteCommande

        this.setState({
            quantiteCommande:quantiteCommande,
            quantitePanier:newQuantitePanier,
            ajoutArticle:true
        })
    }

    supprimerArticlePanier = () => {
        this.setState({
            quantitePanier:0
        })
    }

    modifierQuantiteArticle = (newQuantite) => {
        this.setState({
            quantitePanier:newQuantite
        })
    }

    render() {
        return (
            <>
                <Header 
                   {...this.state}
                   supprimerArticlePanier={this.supprimerArticlePanier}
                   modifierQuantiteArticle={this.modifierQuantiteArticle}
                />
                <SpaceBetweenComponent />
                <div style={{display:"flex", justifyContent:"center"}}>
                    <TextContainerH2>
                        <LineIbzar />
                        <h2 style={{color:'black'}}>Les bienfaits du café, et des 9 épices en plus</h2>
                        <p style={{color:'black', textAlign:"center"}}>
                            Grâce à ses épices, en plus des bienfaits cognitifs de la caféine, Ibzar augmente votre 
                            énergie, améliore votre humeur, stimule votre système immunitaire, votre libido et
                            votre système digestif.
                        </p>
                        <p style={{color:'black', textAlign:"center"}}>
                            Les 9 épices Ibzar : Sésame, anis vert, cannelle, badiane, gingembre, cardamome,
                            clous de girofle, noix de muscade et poivre blanc.
                        </p>
                    </TextContainerH2> 
                </div>
                <SpaceBetweenComponent />
                <ContainerImageText>
                    <TextContainerH3>
                        <LineIbzar />
                        <h3 style={{color:'black'}}>Accomplissez votre journée grâce à la tradition des Hommes de l'Atlas</h3>
                        <p style={{color:'black', textAlign:"start"}}>
                            Le café aux épices est le secret ancestral 
                            utilisé depuis des siècles pour faire face aux climats 
                            rudes de l'Atlas marocain.
                        </p>
                        <p style={{color:'black', textAlign:"start"}}>
                            Ibzar vous permet de profiter des nombreux bienfaits de la savante sélection
                            d'épices traditionnelles du café des femmes et des hommes qui ont dompté les montagnes de l'Atlas.
                        </p>
                        <Link to="/#achat" style={{textDecoration:"none" }}>
                            <Button 
                                style={{
                                    backgroundColor: "#A02123",
                                    color: "white",
                                    width: "400px",
                                    height: "70px"
                                }}
                            >Profiter du bienfaits des épices en <br /> achetant ibzar</Button>
                        </Link>
                    </TextContainerH3> 
                </ContainerImageText>
                <SpaceBetweenComponent />
                <h2 style={{color:'black'}}>Ils ont goûté Ibzar, et ils ont aimé</h2>
                <Avis 
                    {...this.state}
                    clicPrecedent={() => this.handleAvisPrecedent()} 
                    clicSuivant={() => this.handleAvisSuivant()}
                    clicFormulaire={() => this.setState({formulaire:true})}
                    clicCroixFormulaire={() => this.setState({formulaire:false})}
                    ajoutAvis={() => this.handleAjoutAvis}
                    moyenneNoteStar={this.printStars(this.moyenneNote())}
                />
                <SpaceBetweenComponent />
                <ContainerPhotoAvis />
                <SpaceBetweenComponent />
                <div style={{display:"flex", justifyContent:"center"}}>
                    <TextContainerH2>
                        <LineIbzar />
                        <h2 style={{color:'black'}}>Le Café bon pour vous, et aussi pour la Planète</h2>
                        <p style={{color:'black', textAlign:"center"}}>
                            L'aluminium est encore très utilisé dans l'industrie du café et son recyclage est encore 
                            compliqué. La plupart du temps, il finit incinéré, et pollue énormément. Avant son 
                            incinération, la production de l'aluminium cause des rejets d’arsenic, de titane, de 
                            chrome, de plomb, de vanadium et de mercure. Nous nous engageons à faire
                            autrement.
                        </p>
                    </TextContainerH2> 
                </div>
                <SpaceBetweenComponent />
                <Achat 
                    id="achat"
                    {...this.state}
                    ajoutArticle={this.state.ajoutArticle}
                    moyenneNoteStar={this.printStars(this.moyenneNote())}
                    validation={this.ajoutQuantiteCommande}
                />
                <SpaceBetweenComponent />
                <Footer />
           </>
        ); 
    };
};

export default Accueil;