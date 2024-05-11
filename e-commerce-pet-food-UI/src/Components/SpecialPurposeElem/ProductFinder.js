import React, { useState } from 'react';
import '../../CSS/SpecialPurposeElem/ProductFinder.css';
import ProductFinderLink from './ProductFinderLink';
import { Link } from 'react-router-dom';

const ProductFinder = ({setSelectedCategory, categoryName, tagName, imgUrl }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div className="product-finder-container">
      <ProductFinderLink tagName={tagName}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <div onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} className={`product-finder-panel ${isVisible ? 'visible' : ''}`}>
        <div className="product-finder-section">
          <img style={{width: '50%'}} src={`/${imgUrl}`}></img>
          <div>
            <ul className="product-finder-list">
            <li className="product-finder-item"><h6 style={{padding: '0.25rem 0.5rem', margin: "0px" }}  className="product-finder-title">Products By</h6></li>
              <li onClick={handleMouseLeave} className="product-finder-item"><Link style={{fontSize: '10px'}} to='/'>Age</Link></li>
              <li onClick={handleMouseLeave} className="product-finder-item"><Link style={{fontSize: '10px'}} to='/'>Breed</Link></li>
              <li onClick={handleMouseLeave} className="product-finder-item"><Link style={{fontSize: '10px'}} to='/'>Size</Link></li>
              <li onClick={handleMouseLeave} className="product-finder-item"><Link style={{fontSize: '10px'}} to='/'>Special Need</Link></li>
              <li onClick={handleMouseLeave} className="product-finder-item"><Link style={{fontSize: '10px'}} to='/'>Food Type</Link></li>
              <li onClick={e => {handleMouseLeave(e); setSelectedCategory(categoryName) }} className="product-finder-item"><Link style={{fontSize: '10px'}} to={`/products/all?category=${categoryName}`}>All Products</Link></li>
            </ul>
          </div>
        </div>
        <div style={{justifyContent: 'space-between'}} className="product-finder-section side-bar">
          <div>
            <h6 className="product-finder-title">New Arrivals</h6>
            <h6 className="product-finder-title">Top Sellers</h6>
            <h6 className="product-finder-title">Offers</h6>
          </div>

          <div style={{width: '50%'}}>
            <p style={{fontSize: '10px'}}>
              <strong>Find the right nutrition for your pet</strong>
            </p>
            <p style={{fontSize: '10px'}}>
              Use our product finder to discover which product is more recommended
              for your pet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFinder;

// categoryId={category.id}  tagName={category.name.en}