import React from 'react';
import Baki from "../img/Baki2.png";
import Naya from "../img/Nayaford.jpg";
import Kader from "../img/Kader.png";
import Sally from "../img/Sally.png";


const Card = () => {
  return (
  
    <div className="quatres">
      <h1 className="entrepreneur">Nos entrepreneurs</h1>
    <div className="profile-grid">
    <div className="profile-card">
      <img src={Baki} alt="Baki" />
      <div className="overlay">
        <h4>BAKI BARBER</h4>
        <p>Coiffeur</p>
      </div>
    </div>
  
    <div className="profile-card">
      <img src={Naya} alt="Naya" />
      <div className="overlay">
        <h4>NAY AFFORD'S</h4>
        <p>Créatrice Designer</p>
      </div>
    </div>
  
    <div className="profile-card">
      <img src={Kader} alt="Kader" />
      <div className="overlay">
        <h4>KADER</h4>
        <p>Afrik'N'Fusion</p>
      </div>
    </div>
  
    <div className="profile-card">
      <img src={Sally} alt="Sally" />
      <div className="overlay">
        <h4>CRAZY SALLY</h4>
        <p>Blogueuse</p>
      </div>
    </div>
  </div>
  </div>
  
  );
};

export default Card;
