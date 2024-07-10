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
      <img src={images[currentIndex]} alt="Logement" className='img-lgt' />

      {images.length > 1 && (
        <div className="btn">
          <button onClick={handlePrev}>
            <img src={`/assets/arrow_back.png`} alt="flèche précédente" className='arrow-back' />
          </button>
          <button onClick={handleNext}>
            <img src={`/assets/arrow_forward.png`} alt="flèche suivante" className='arrow-forward' />
          </button>
        </div>
      )}
    </div>
  );
}

export default Carousel;
