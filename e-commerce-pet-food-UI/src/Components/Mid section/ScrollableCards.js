import React, { useEffect, useState } from 'react'
import ScrollableContainer from '../SpecialPurposeElem/ScrollableContainer';
import Card from './Card';
import Loader from '../SpecialPurposeElem/Loader';

const ScrollableCards = ({categoryName, productData}) => {

    return (
        <div>
            <ScrollableContainer categoryName={categoryName}>
                {productData.map(item => {
                    return (<Card key={item.id} imageUrl={item.masterVariant.images[0].url} title={item.name.en} description={item.metaDescription.en} />)
                })}
            </ScrollableContainer>
        </div>
    )
}

export default ScrollableCards;