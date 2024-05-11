import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import '../../../CSS/Mid Section/ProductDisplay/Reviews.css' // Import CSS file for styling
import ProgressBar from '../../SpecialPurposeElem/ProgressBar';

const Reviews = () => {
  const [hoveredRating, setHoveredRating] = useState(null);

  const handleStarHover = (rating) => {
    setHoveredRating(rating);
  };

  const handleStarLeave = () => {
    setHoveredRating(null);
  };

  return (
    <div className="review-section">
      <div className="ratings-bars">
        <div className="rating-bar">
          <div className="star">5 <FaStar /></div>
          <div className="percentage-bar"><ProgressBar progress={100}/></div>
        </div>
        <div className="rating-bar">
          <div className="star">4 <FaStar /></div>
          <div className="percentage-bar"><ProgressBar progress={80}/></div>
        </div>
        <div className="rating-bar">
          <div className="star">3 <FaStar /></div>
          <div className="percentage-bar"><ProgressBar progress={80}/></div>
        </div>
        <div className="rating-bar">
          <div className="star">2 <FaStar /></div>
          <div className="percentage-bar"><ProgressBar progress={80}/></div>
        </div>
        <div className="rating-bar">
          <div className="star">1 <FaStar /></div>
          <div className="percentage-bar"><ProgressBar progress={80}/></div>
        </div>
      </div>
      <div className="overall-rating">
        <h2>Overall Rating</h2>
        <div className="stars">
          {/* Display actual rating using React Icons */}
          {Array.from({ length: 5 }, (_, index) => (
            <FaStar key={index} size={30} className={index < 4 ? "filled" : ""} />
          ))}
        </div>
      </div>
      <div className="review-product">
        <h2>Review This Product</h2>
        <div className="stars">
          {/* Checkbox-like stars */}
          {Array.from({ length: 5 }, (_, index) => {
            // console.log(_, index);
            return (
            <FaStar
            size={30}
              key={index}
              className={index < hoveredRating ? "selected" : ""}
              onMouseEnter={() => handleStarHover(index + 1)}
              onMouseLeave={handleStarLeave}
            />
          )})}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

