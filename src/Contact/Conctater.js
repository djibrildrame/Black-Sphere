import React from 'react';
import "../Contact/Contact.css";
import Header from "../HeaderFooter/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTiktok,
  faSnapchatGhost,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Conctater = () => {
  return (
    <div>
        <Header/>
        <section className="contact-section">
      <h2>Contactez-nous</h2>
      <p>
        Une question, une collaboration, un message ? Black Sphere est à votre écoute.
      </p>
      <p>
        📧 Écrivez-nous à :{" "}
        <a href="problacksphere@gmail.com" className="email-link">
          problacksphere@gmail.com
        </a>
      </p>

      <div className="social-links">
        <a href="https://www.tiktok.com/@black_sphere?_t=ZN-8vVEuWRZ21u&_r=1" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok} />
          <span>Black_sphere</span>
        </a>

        <a href="https://www.instagram.com/black_sphere_pro?igsh=bmQ5djJ4MXR4Z2tj&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
          <span>Black_sphere_pro</span>
        </a>

        <a href="https://x.com/votrepage" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faXTwitter} />
          <span>@votrepage</span>
        </a>

        <a href="https://snapchat.com/t/7sl9jY0z" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSnapchatGhost} />
          <span>Blacksphereoff</span>
        </a>
      </div>
    </section>
     
    </div>
  )
}

export default Conctater;