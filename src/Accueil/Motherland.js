import React from 'react';
import "../Accueil/Accueil.css";
import lumumba from "../img/Lumumba.jpg";
import Sankara from "../img/Sankara.jpg";
import Mansa from "../img/Mansa.jpg";

const Motherland = () => {
  return (
    <div>
       <h1 className="motherland">Nos inspirations</h1>
    <div className="inspiration">
     
    <div className="lumumba"> 
  <img className="patrice" src={lumumba} alt="Patrice Lumumba" />
  <p>
    <strong className='titlehomme'>PATRICE MULUMBA</strong><br />
    Premier Premier ministre du Congo indépendant en 1960, Patrice Lumumba incarne la lutte pour la liberté et la dignité des peuples africains.<br />
    Orateur charismatique et homme de conviction, il s’est opposé fermement à la mainmise coloniale sur les ressources et les décisions du pays.<br />
    Son assassinat, quelques mois après son arrivée au pouvoir, a fait de lui un martyr de l’indépendance africaine et un symbole mondial de la lutte anticoloniale.
  </p>
</div>
    <div className="sankara"> 
  <img className="patrice" src={Sankara} alt="Thomas Sankara" />
  <p>
    <strong className='titlehomme'>THOMAS SANKARA</strong><br />
    Président du Burkina Faso de 1983 à 1987, Thomas Sankara est considéré comme l’un des leaders africains les plus intègres et visionnaires. Il a mené une révolution audacieuse pour l’émancipation de son peuple : lutte contre la corruption, promotion des droits des femmes, autosuffisance alimentaire, éducation et santé pour tous. Surnommé le “Che Guevara africain”, il reste une figure emblématique de la résistance et du panafricanisme.
  </p>
</div>
    <div className="lumumba"> 
  <img className="patrice" src={Mansa} alt="Mansa Musa" />
  <p>
    <strong className='titlehomme'>MANSA MOUSSA</strong><br />
    Empereur du Mali au XIVe siècle, Mansa Musa est considéré comme l’un des hommes les plus riches de tous les temps. Son règne a marqué l’âge d’or de l’empire malien, avec le développement du commerce, de l’éducation et de l’architecture. Son célèbre pèlerinage à La Mecque, accompagné d’une immense caravane, a projeté l’Afrique de l’Ouest sur la scène mondiale. Mansa Musa reste une figure de grandeur, de prospérité et de rayonnement culturel africain.
  </p>
</div>


    


    </div>

    <h1 className='part2'>Motherland</h1>
    </div>
  )
}

export default Motherland;