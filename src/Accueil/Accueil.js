import React from 'react';
import "../Accueil/Accueil.css";
import Header from "../HeaderFooter/Header";
import Slider from './Slider';
import Footer from "../HeaderFooter/Footer";
import Cards from "../Accueil/Cards";
import Motherland from './Motherland';


const Accueil = () => {
  return (
    <div>
        <Header/>

        <Slider/>
        
        <Cards/>

        <a href="/">
        <p className="plus">Voir plus</p>
        </a>

        <Motherland/>

        <div className="cta-entrepreneur">
  <h2>💼 Vous êtes entrepreneur ?</h2>
  <p>Rejoignez Black Sphere pour gagner en visibilité et faire partie d’un réseau engagé.</p>
  <a href="/user" className="cta-button">Créer mon profil</a>
</div>

           <Footer/>

           
   
    </div>
  );
};

export default Accueil;
