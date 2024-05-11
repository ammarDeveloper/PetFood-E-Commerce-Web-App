import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowForwardIos } from 'react-icons/md';
import '../../CSS/Mid Section/Banner.css'


const Banner = ({selectedCategory}) => {
    // getting category id fron the url
    const urlParams = new URLSearchParams(window.location.search);
    const categoryNameFromUrl = urlParams.get('category');
    const categoryName = selectedCategory || categoryNameFromUrl;

    return (
        <div className='banner'>
            <div className='banner-left'>
                <h1>{categoryName}</h1>
                <Link className='plp-link' to="/">Home</Link> <span style={{margin: '5px'}}><MdArrowForwardIos size={10} /></span>
                <Link className='plp-link active' to={`/products/all?category=${categoryName}`}>{categoryName}</Link>
            </div>
            <div className='banner-right'>
                <img src='/images/plp-banner-dog.png'></img>
            </div>
        </div>
    )
}

export default Banner;