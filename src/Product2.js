import React from 'react'
import './Product2.css'
import { useStateValue } from './StateProvider';

function Product2({ title2, options,image }) {
    const [{ }, dispatch] = useStateValue();


    const addToBasket = () => {
        //Add item to basket..
        dispatch({
            type: 'ADD_TO_BASKET',
            type: {
                title2: title2,
                options: options,
                image: image
            }
        })
    };
    return (
        <div className='product2'>
            <div className='product2_Head'>
                <p className='product2_Title'>{title2}</p>
                <a className='product2_Options'>{options}</a>
            </div>
            <img className='product2_Image' src={image}/>
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    );
}

export default Product2