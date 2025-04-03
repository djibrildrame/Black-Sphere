import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import img1 from "../img/Baki.jpg";
import img2 from "../img/Congo.jpg";
import img3 from "../img/Nayaford.jpg";

import "../Accueil/Accueil.css"; // 🟡 assure-toi d’avoir ce fichier

const images = [img1, img2, img3];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
  
    <div className="slider-wrapper">
      <div className="slider-content">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Black Sphere ${index + 1}`}
            className={`slider-image ${
              index === activeIndex ? "active" : "inactive"
            }`}
          />
        ))}
      </div>

      <div className="slider-arrows">
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={prevSlide}
          className="arrow arrow-left"
        />
        <FontAwesomeIcon
          icon={faChevronRight}
          onClick={nextSlide}
          className="arrow arrow-right"
        />
      </div>

      <div className="slider-bullets">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`bullet ${index === activeIndex ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
