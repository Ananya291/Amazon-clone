import React from 'react'
import './Product.css'

function Product({ title, offer,img,seller,cost }) {
    return (
        <div className='product'>  
            <p className='product_Title'>{title}</p>
            <img className='product_Image' src={img} alt='' />
            <p className='product_Seller'>{seller}</p>
            <strong className='product_Cost'>{cost}</strong>
            <div className='product_Offer'>
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
