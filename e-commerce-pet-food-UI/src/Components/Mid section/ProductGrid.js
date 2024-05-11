import React, { useEffect, useState } from 'react';
import '../../CSS/Mid Section/ProductGrid.css';
import Card from './Card';
import FetchCategoriesAndProducts from '../../Helpers/FetchData/FetchCategoriesAndProducts';
import Loader from '../SpecialPurposeElem/Loader';
import FetchProducts from '../../Helpers/FetchData/FetchProducts';

const ProductGrid = ({selectedCategory}) => {
    const [loading, setLoading] = useState(true);
    const [categories, setCatogories] = useState([]);
    const [offset, setOffset] = useState(0);
    const [count, setCount] = useState(0);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    // const [categoryName, setCategoryName] = useState('');

    // getting category id fron the url
    const urlParams = new URLSearchParams(window.location.search);
    const categoryNameFromUrl = urlParams.get('category');
    const categoryName = selectedCategory || categoryNameFromUrl;
    
    


    const nextProducts = () => {
        setOffset(offset + limit);
        setPage(page + 1);
    }

    const prevProducts = () => {
        setOffset(offset - limit);
        setPage(page - 1);
    }


    return (
        <div className="product-grid-container">
            <div className="top-row">
                <h2>{categoryName}</h2>
                <p>Displaying: {offset + 1} - {offset + limit > count ? count : offset + limit} out of {count} items</p>
            </div>
            <div className="product-grid">
                {loading ?
                    (<Loader />) :
                    (categories[0].products.map(item => {
                        return (<Card key={item.id} imageUrl={item.masterVariant.images[0].url} title={item.name.en} description={item.metaDescription.en} />)
                    }))}
                
                <FetchCategoriesAndProducts setCatogories={setCatogories} setLoading={setLoading} limit={limit} offset={offset} setCount={setCount} categoryName={categoryName} />

                {/* <FetchProducts setProducts={setProducts} setLoading={setLoading} limit={limit} offset={offset} setCount={setCount} categoryId={selectedCategory ? selectedCategory : categoryId} /> */}
            </div>
            <div className='bottom-row'>
                <button disabled={page === 1} onClick={prevProducts} >Prev</button>
                <p>{page} out of {Math.ceil(count / limit)}</p>
                <button disabled={page === Math.ceil(count / limit)} onClick={nextProducts}>Next</button>
            </div>
        </div>
    );
};

export default ProductGrid;