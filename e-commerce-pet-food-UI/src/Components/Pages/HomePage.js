import React from 'react';
import Carousel from '../Mid section/Carousel';
import ScrollableCards from '../Mid section/ScrollableCards';
import FetchCategoriesAndProducts from '../../Helpers/FetchData/FetchCategoriesAndProducts';
import Loader from '../SpecialPurposeElem/Loader';

const HomePage = ({ categories, loading, setCatogories, setLoading, setCount }) => {
    // Define the carousel images for the home page
    const homeCarouselimages = ['banner1.jpg', 'banner2.jpg', 'banner3.jpg'];

    return (
        <>
            <Carousel images={homeCarouselimages} />
            {loading ? (
                <Loader />
            ) : (
                categories.map(
                    (category) =>
                        category.products.length > 0 && (
                            <ScrollableCards key={category.id} categoryName={category.name.en} productData={category.products} />
                        )
                )
            )}
            <FetchCategoriesAndProducts setCatogories={setCatogories} setLoading={setLoading} limit={6} setCount={setCount} />
        </>
    );
};

export default HomePage;