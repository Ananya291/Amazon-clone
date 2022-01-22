import React from 'react'
import './Product.css'

function Product({ title, offer,img }) {
    return (
        <div className='Product'>  
            <p className='Product_title'>{title}</p>
            <img className='Product_image' src={img} alt='' />
            <div className='Product_Offer'>
                <a>{offer}</a>
            </div>
            {/* <div className='Product_container2'>
                    <p className='Product_title'>Starting ₹99 | Electronics & accessories</p>
                    <img className='Product_image' src={electronics} alt='' />
                    <a className='Product_Offer'>See all offers</a>
                </div>

                <div className='Product_container3'>
                    <p className='Product_title'>Up to 50% off | TVs & Appliances</p>
                    <img className='Product_image' src={appliances} alt='' />
                    <a className='Product_Offer'>See all offers</a>
                </div> */}
        </div>
    )
}

export default Product
