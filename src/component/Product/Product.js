import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { product, addToCardHandle } = props;
    const { name, img, price } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>{price}</p>
            </div>
            <button onClick={() => addToCardHandle(product)} className='btn-card' >
                <p className=' btn-text'>Add to Card</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button >
        </div >
    );
};

export default Product;