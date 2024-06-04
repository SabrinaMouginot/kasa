import React, { useState } from 'react';
import '../../css/Carousel.css';

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button onClick={handlePrev}>Précédent</button>
      <img src={images[currentIndex]} alt="Logement" />
      <button onClick={handleNext}>Suivant</button>
    </div>
  );
}

export default Carousel;
