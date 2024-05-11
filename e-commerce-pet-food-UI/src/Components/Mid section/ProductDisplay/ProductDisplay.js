import React, { useState } from 'react';
import '../../../CSS/Mid Section/ProductDisplay/ProductDisplay.css'
import Reviews from './Reviews';

const ProductDisplay = () => {
    const [selectedSize, setSelectedSize] = useState('S');

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    return (
        <>
            <div className="product-display">
                <div className="product-image">
                    <img src="https://www.findroyalcanin.com/cdn/shop/files/NewProject_9.png?v=1698232497" alt="Product" />
                </div>
                <div className="product-details">
                    <h2>Product Name</h2>
                    <p>Product Type Name</p>
                    <div className="ratings">
                        {/* Stars can be implemented here */}
                    </div>
                    <p>Product Description</p>
                    <select value={selectedSize} onChange={handleSizeChange}>
                        <option value="S">500 g</option>
                        <option value="M">1 kg</option>
                        <option value="L">2 kg</option>
                    </select>
                    <p>Price: $90.00</p>
                    <button className="buy-now-button">Buy Now</button>

                </div>
            </div>
        </>
    );
};

export default ProductDisplay;

