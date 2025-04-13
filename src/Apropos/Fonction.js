import React from 'react';
import Fruite from "../img/fruite.jpeg";
import Mel from "../img/Mel.jpeg";
import Parisien from "../img/parisien.jpeg";



const Fonction = () => {
  return (
    <div>
        <div>
        <img className="presentationlogo" src={Fruite} alt="Fruite"  />
        <p className='textmembre'>❝ Je suis en charge de repérer et inviter des entrepreneurs<br/> et des personnalités inspirantes afin qu'elles aient de la visibilité <br/>au sein de la communauté et de gérer l'animation des lives TikTok. ❞</p>
        <h2 className='signature'>C'EST FRUITÉ</h2>
        </div>
        <div>
        <img className="presentationlogo" src={Mel} alt="Fruite"  />
        <p className='textmembre'>❝ Je suis en charge de la création de contenus, de l’animation des lives,<br/> de la coordination au sein de BLACK SPHÈRE, mais également<br/> de repérer les entrepreneurs et réussites noires. ❞</p>
        <h2 className='signature'>MELANINE</h2>
        </div>
        <div>
        <img className="presentationlogo" src={Parisien} alt="Fruite"  />
        <p className='textmembre'>❝ Je suis en charge de la création de l'application<br/> et du site de Black Sphère et de les maintenir.Et je <br/> gère également l'animation des lives en tant qu'hôte. ❞</p>
        <h2 className='signature'>INCROYABLEMENT PARISIEN</h2>
        </div>
    </div>
  )
}

export default Fonction;