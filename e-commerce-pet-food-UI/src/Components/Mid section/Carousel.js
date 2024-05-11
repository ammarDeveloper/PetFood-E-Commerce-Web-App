import React, { useState, useEffect } from 'react';
import '../../CSS/Mid Section/Carousel.css';

const Carousel = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel" style={{ height: '60vh' }}>
      {images.map((image, index) => (
        <div
          key={index}
          className={index === currentIndex ? 'slide active' : 'slide'}
          style={{ backgroundImage: `url(images/${image})` }}
        ></div>
      ))}
    </div>
  );
};

export default Carousel;

