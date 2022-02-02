import React from 'react'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            {/* <img className='' src='' /> */}

            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>You have no items in your basket. To buy one or more items,
                        click "Add to Basket" next to the item.
                    </p>
                </div>
            ) : (
                <div>
                    <h2 className='checkout_Title'>Your Shopping Basket</h2>
                    {/*list out all the checkout products*/}
                    {basket.map((item) => (
                        <CheckoutProduct
                         id={item.id}
                         title2={item.title2}
                         options={item.options}
                         image={item.image}
                         price={item.price}
                         />
                        
                    ))}
                </div>

            )}
        </div>
    )
}

export default Checkout
