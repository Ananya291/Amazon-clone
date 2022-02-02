import React from 'react'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider'

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className='checkout_left'>
                 <img className='checkout_ad' 
                 src='https://wp.disruptiveadvertising.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png'
                 alt='ad-image'
                 />

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
            {basket.length > 0 && (
                <div className='checkout_right'>
                    <Subtotal/>
                </div>
            )}
        </div>
    )
}

export default Checkout
