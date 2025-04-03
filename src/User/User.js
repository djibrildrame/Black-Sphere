import React from 'react';
import "../User/User.css";
import Logo from "../img/black.png";
import Footer from "../HeaderFooter/Footer";

const User = () => {
  return (
    <div>
        <img src={Logo} className="logoblack" alt="logo Black Sphere"/> 

        <p className="accroche">Vous êtes entrepreneur et souhaitez bénéficier du soutien de Black Sphere ? <br/>Présentez-vous en quelques lignes et rejoignez notre réseau solidaire.</p>

        <div className="champ">
        <input type="text" name="nom" id="nom" placeholder="Prenom Nom"/>
        <input type="text" name="nom" id="mail" placeholder="Email"/>
        <input type="text" name="nom" id="descriptif" placeholder="Quel est votre domaine ou secteur d’activité ?"/>
        <input className="submit" type="submit" value="Envoyer "/>
        </div>

        <Footer/>



    </div>
  )
}

export default User;