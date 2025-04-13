import React from 'react';
import Logo from "../img/black.png";
import { Link } from 'react-router-dom';

const Principal = () => {
  return (
    <div>
        <header className="header">
  <div className="header-top">
  <Link to="/">
    <div className="logo-section">
      <img src={Logo} alt="Black Sphere" className="logo" />
      <h1 className="brand-name">BLACK SPHERE</h1> 
    </div>
    </Link>
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
</header>

    </div>
  )
}

export default Principal;