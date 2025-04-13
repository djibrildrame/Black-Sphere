import React from 'react';
import Header from '../HeaderFooter/Header';
import Membre from './Membre';
import Fonction from "../Apropos/Fonction";
import But from "../Apropos/But";
import Footer from "../HeaderFooter/Footer";



const Apropos = () => {
  return (
    <div>
        <Header/>
        <Membre/>
        <Fonction/>
        <But/>
        <Footer/>
       
       

    </div>
  )
}

export default Apropos;