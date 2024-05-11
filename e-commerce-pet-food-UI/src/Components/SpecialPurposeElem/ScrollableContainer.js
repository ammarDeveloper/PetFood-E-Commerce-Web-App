import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../../CSS/SpecialPurposeElem/ScrollableContainer.css'

const ScrollableContainer = ({ children, categoryName}) => {
  const containerRef = useRef(null);
  const [scrollable, setScrollable] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    console.log("scrollable conat")
    console.log(container.scrollWidth, container.clientWidth, scrollable)
    setScrollable(container.scrollWidth > container.clientWidth);
  }, []);

  const handleScroll = (direction) => {
    const container = containerRef.current;
    if (direction === 'left') {
      container.scrollTo({
        left: container.scrollLeft - container.clientWidth,
        behavior: 'smooth',
      });
    } else if (direction === 'right') {
      container.scrollTo({
        left: container.scrollLeft + container.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="scrollable-container">
      {scrollable && (
        <button className="scroll-button left" onClick={() => handleScroll('left')}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      )}
      <div className="scrollable-content-upper">
          <h2>{categoryName}</h2>
        <div className="scrollable-content" ref={containerRef}>
          {children}
        </div>
      </div>
      {scrollable && (
        <button className="scroll-button right" onClick={() => handleScroll('right')}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      )}
    </div>
  );
};

export default ScrollableContainer;
