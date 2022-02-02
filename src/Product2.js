import React from 'react'
import './Product2.css'
import { useStateValue } from './StateProvider';

function Product2({ id,title2, options, image, price }) {
    const [{ }, dispatch] = useStateValue();


    const addToBasket = () => {
        //Add item to basket..
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title2: title2,
                options: options,
                image: image,
                price: price
            }
        })
    };
    return (
        <div className='product2'>
            <div className='product2_Head'>
                <p className='product2_Title'>{title2}</p>
                <a className='product2_Options'>{options}</a>
            </div>
            <img className='product2_Image' src={image} />
            <strong className='product2_price'>{price}</strong>
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    );
}

export default Product2