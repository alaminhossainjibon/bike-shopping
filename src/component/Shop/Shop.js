import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [card, setCard] = useState([]);


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addToCardHandle = (product) => {
        const newCard = [...card, product];
        setCard(newCard);
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCardHandle={addToCardHandle}
                    ></Product>)
                }
            </div>
            <div className='card-container'>
                <Card card={card}></Card>
            </div>
            <div className='q-container'>
                <h1>Question:1. How React works?</h1>
                <p>Answer:</p>
                <h1>Question:2. How useState works?</h1>
                <p>Answer:</p>
            </div>
        </div>
    );
};

export default Shop;