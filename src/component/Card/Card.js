import React from 'react';
import './Card.css'
const Card = ({ card }) => {
    return (
        <div className='card'>
            <h2>Selected item</h2>
            <h2>{card.name}</h2>
            <div className='choose-card'>
                <button className=''>Choose Again</button>
                <br />
                <button className=''>Remove Item</button>
            </div>
        </div>
    );
};

export default Card;