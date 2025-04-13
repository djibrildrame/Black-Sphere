import React from 'react';
import "../Apropos/Apropos.css";
import Fruite from "../img/fruite.jpeg";
import Mel from "../img/Mel.jpeg";
import Parisien from "../img/parisien.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";



const Membre = () => {
  return (
    <div>
        <h1 className='membre'>MEMBRES DE BLACK SPHERE</h1>
   <div className="card">
  <figure className="snip1344">
    <img src={Fruite} alt="Fruite" className="background" />
    <img src={Fruite} alt="Fruite" className="profile" />
    <figcaption>
      <h3>FRUITÉ<span>COMMUNICATION & ANIMATEUR</span></h3>
      <div className="icons">
        <a href="https://www.tiktok.com/@itstbj?lang=fr"><FontAwesomeIcon icon={faTiktok} /></a>
        <a href="https://www.instagram.com/itstbj?igsh=b3gzdzA4bzNpOXEw&utm_source=qr"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://x.com/itstbj?s=21&t=8wzAsBwFhogJMdLQ5pfXpw"><FontAwesomeIcon icon={faXTwitter} /></a>
      </div>
    </figcaption>
  </figure>

  <figure className="snip1344 hover">
    <img src={Mel} alt="Melouflex" className="background" />
    <img src={Mel} alt="Melouflex" className="profile" />
    <figcaption>
      <h3>MELANINE<span>MONTEUSE VIDÉO & ANIMATRICE</span></h3>
      <div className="icons">
        <a href="https://www.tiktok.com/@lenordsesouvient?_t=ZN-8vHOt5UF5AE&_r=1"><FontAwesomeIcon icon={faTiktok} /></a>
        <a href="https://www.instagram.com/aciervalyrien?igsh=MWhqMHI3eDlkemV3Zg%3D%3D&utm_source=qr"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
      </div>
    </figcaption>
  </figure>

  <figure className="snip1344">
    <img src={Parisien} alt="Incroyablement Parisien" className="background" />
    <img src={Parisien} alt="Incroyablement Parisien" className="profile" />
    <figcaption>
      <h3>INCROYABLEMENT PARISIEN<span>DÉVELOPPEUR WEB & ANIMATEUR</span></h3>
      <div className="icons">
        <a href="https://www.tiktok.com/@incroyablement_parisien?lang=fr"><FontAwesomeIcon icon={faTiktok} /></a>
        <a href="https://www.instagram.com/incroyablement_parisien/?hl=fr"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://x.com/tikitaka_93"><FontAwesomeIcon icon={faXTwitter} /></a>
      </div>
    </figcaption>
  </figure>
</div>
  </div>
  )
}

export default Membre;