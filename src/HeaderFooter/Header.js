import React from 'react';
import "../HeaderFooter/Header.css";
import Logo from "../img/black.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import Footer from "../HeaderFooter/Footer";




const Header = () => {
  return (
    <div>
        <div className="tete">
            <div>
           <img src={Logo} className="logo" alt="Logo blacksphere" />
            </div>

            <div className="rubrique">
                <h1 className="hoverrub">À PROPOS</h1>
                <h1 className="hoverrub">NOS VALEURS</h1>
                <h1 className="hoverrub">SUCCESS STORIES </h1>
                <h1 className="hoverrub">ASSOCIATION</h1>
                <h1 className="hoverrub">NOUS CONTACTER</h1>
                <Link to="/user">
                <FontAwesomeIcon icon={faUser} className="user" />
                </Link>

             
            </div>
      

        </div>



    </div>
  )
}

export default Header;