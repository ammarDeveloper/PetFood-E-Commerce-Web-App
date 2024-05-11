import React from 'react';
import '../../CSS/SpecialPurposeElem/ProductFinder.css';

const ProductFinderLink = ({ tagName, onMouseEnter, onMouseLeave }) => (
  <a
    className="product-finder-link"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {tagName}
  </a>
);

export default ProductFinderLink;