import React from 'react';
import '../../CSS/Mid Section/Card.css';

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="card" style={{ height: '65vh', width: '23vw' }}>
      <div className='img-box'>
        <img src={imageUrl} alt="Card" className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="card-title" style={{ height: '30px', overflow: 'hidden'}}>{title}</h3>
        <p className="card-description" style={{ height: '40px', overflow: 'hidden'}}>{description}</p>
        {/* <button className="blue-button" style={{ height: '40px', overflow: 'hidden'}}>Learn More</button> */}
        <div className="royel-bottom-btn">
        <div className="royel-quantity-select">
            <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.34108 1L6.8553 6L12.3695 0.999999" stroke="#393939" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <select name="id">
                <option>500 Gms</option>
                <option>1.5 KG</option>
                <option>3 KG</option>
            </select>
        </div>
        <div className="royel-buy-now-btn-box">
            <button className="buy-now-btn-royel">
                Buy Now
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.60226 6.49976H11.6021" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6.10216 11.9998L11.6021 6.4999L6.10216 1" stroke="white" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </button>
        </div>
    </div>
      </div>
    </div>
  );
};

export default Card;
