import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, price } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>{price}</p>
            </div>
            <button className='btn-card'>
                <p className='btn-text'>Add to Card</p>
            </button>
        </div>
    );
};

export default Product;