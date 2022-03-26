import React from 'react';
import './Card.css'
const Card = ({ card }) => {
    return (
        <div className='card'>
            <p>item: {card.length}</p>
        </div>
    );
};

export default Card;