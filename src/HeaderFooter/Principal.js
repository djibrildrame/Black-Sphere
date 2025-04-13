import React from 'react';
import Logo from "../img/black.png";
import Person from "../img/personne.png";
import { Link } from 'react-router-dom';

const Principal = () => {
  return (
    <div>
        <header className="header">
  <div className="header-top">
    <div className="logo-section">
      <img src={Logo} alt="Black Sphere" className="logo" />
      <h1 className="brand-name">BLACK SPHERE</h1>
    </div>
    <nav className="nav-menu">
      <a href="/stories">NOS ENTREPRENEURS</a>
      <a href="/valeurs">NOS VALEURS</a>
      <a href="/association">ASSOCIATION</a>
      <Link to="/apropos">
      <a href="apropos">À PROPOS</a>
      </Link>
      <a href="/contact">CONTACT</a>
    </nav>
  </div>

  <div className="header-content">
    <div className="text-section">
      <h2>BIENVENUE SUR BLACK SPHERE</h2>
      <p>
        Un réseau engagé pour inspirer, valoriser et soutenir les talents afro.
      </p>
      <Link to="/user">
      <a href="#rejoindre" className="cta-button">REJOINDRE LA COMMUNAUTÉ</a>
      </Link>
    </div>
    <div className="image-section">
      <img src={Person} alt="Team" className="team-img" />
    </div>
  </div>
</header>

    </div>
  )
}

export default Principal