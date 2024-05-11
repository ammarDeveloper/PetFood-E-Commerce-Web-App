import React from 'react';
import Banner from '../Mid section/Banner';
import SortBy from '../Mid section/SortBy';
import ProductGrid from '../Mid section/ProductGrid';

const ProductsPage = ({ selectedCategory }) => {
  return (
    <>
      <Banner selectedCategory={selectedCategory} />
      <div className="app-container">
        <SortBy />
        <ProductGrid selectedCategory={selectedCategory} />
      </div>
    </>
  );
};

export default ProductsPage;