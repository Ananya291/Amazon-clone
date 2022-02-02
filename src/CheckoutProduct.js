import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id,title2, options, image, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct_image' src={image} alt='' />

      <div className='checkoutProduct_info'>
        <p className='checkoutProduct_title'>{title2}</p>
        <p  className='checkoutProduct_price'>
        <strong>{price}</strong>
        </p>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>

    </div>
  );

}

export default CheckoutProduct;
