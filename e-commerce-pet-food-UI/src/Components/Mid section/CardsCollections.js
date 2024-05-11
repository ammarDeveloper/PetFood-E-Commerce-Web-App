import React from 'react'
import Card from './Card';
import '../../CSS/Mid Section/CardsCollections.css'

const CardsCollections = () => {
  return (
    <div className='grid-container'>
      <Card imageUrl="product1.jpg" title="Best shoe sale" description="Login and get best shoe sale, don't miss the apportunity"/>
      <Card imageUrl="product1.jpg" title="Best shoe sale" description="Login and get best shoe sale, don't miss the apportunity"/>
      <Card imageUrl="product2.jpg" title="Best headphone sale" description="Login and get headphone sale, don't miss the apportunity"/>
      <Card imageUrl="product3.jpg" title="Best watches sale" description="Login and get best watches sale, don't miss the apportunity"/>
    </div>
  )
}

export default CardsCollections;
