import React from 'react';
import '../HeaderFooter/Header.css';
import Logo from '../img/black.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTiktok,
  faFacebookF,
  faXTwitter,
  faYoutube,
  faSpotify,
  faSnapchatGhost,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <img src={Logo} alt="Black Sphere" className="footer-logo" />
        <p className="footer-text">
          Black Sphere – Réunir, inspirer et soutenir la communauté à travers nos valeurs et nos actions.
        </p>
      </div>

      <div className="footer-socials">
        <a href="https://www.instagram.com/black_sphere_pro?igsh=bmQ5djJ4MXR4Z2tj&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
        </a>
        <a href="https://www.tiktok.com/@black_sphere?_t=ZN-8vVEuWRZ21u&_r=1" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok} className="social-icon" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faXTwitter} className="social-icon" />
        </a>
        <a href="https://youtube.com/@blacksphereoff?si=Q0JSJCLBXr6y4ECh" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} className="social-icon" />
        </a>
        <a href="https://open.spotify.com/show/39wvDdZodHT93jZoAINqt5" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSpotify} className="social-icon" />
        </a>
        <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSnapchatGhost} className="social-icon" />
        </a>
        <a href="https://snapchat.com/t/7sl9jY0z" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTelegram} className="social-icon" />
        </a>
        <a href="mailto:Problacksphere@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
        </a>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Black Sphere. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
