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

    const addToCardHandle = (item) => {
        const newCard = [...card, item];
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
                {
                    card.map(card => <Card
                        card={card}
                    ></Card>)
                }
            </div>
            <div className='q-container'>
                <h1>Question:1. How React works?</h1>
                <h1>Answer: </h1>
                <p>Feedback works in declarative code. In order to understand what we mean by declarative code, we want you to imagine the following code as an app. With a navigator, a title, a filter, and a list you can see what the image looks like on the screen below. Because every line of code declares what every element of the app is.</p>
                <h1>Question:2. How useState works?</h1>
                <h1>Answer:</h1>
                <p>useState is a hook that lets you place stat variables on functional elements. You pass the initial state to this function and it provides a variable with the current state value (not the initial state) and another function to update this value.</p>
            </div>
        </div>
    );
};

export default Shop;