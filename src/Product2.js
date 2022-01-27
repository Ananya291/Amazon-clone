import React from 'react'
import './Product2.css'

function Product2({ title2, options,image }) {
    return (
        <div className='product2'>
            <div className='product2_Head'>
                <p className='product2_Title'>{title2}</p>
                <a className='product2_Options'>{options}</a>
                <img className='product2_Image' src={image}/>
            </div>


        </div>
    );
}

export default Product2