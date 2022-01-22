import React from 'react'
import './MainCheckout.css'
import Header from './Header'
import Product from './Product'
import bannerimage from './banner-image2.jpg'
import phone from './phone.jpg'
import electronics from './electronics.jpg'
import appliances from './appliancess.png'


function MainCheckout() {
    return (
        <div className='home'>
            <Header />
            <img className='home_image'
                src={bannerimage} alt='bannerimage'
            />

            <div className='home_row'>
                <Product
                    title="Up to 40% off on mobiles & accessories"
                    offer="See all offers"
                    img={phone}
                    
                />
                <Product
                    title="Starting ₹99 | Electronics & accessories"
                    offer="See all offers"
                    img={electronics}
                /><Product
                    title="Up to 50% off | TVs & Appliances"
                    offer="See all offers"
                    img={appliances}
                />
            </div>

            <div className='home_row'>
                <Product
                    title="Up to 40% off on mobiles"
                    offer="See all offers"
                    img={phone}
                />
                <Product
                    title="Starting ₹99 | Electronics & accessories"
                    offer="See all offers"
                    img={phone}
                /><Product
                    title="Up to 50% off | TVs & Appliances"
                    offer="See all offers"
                    img={phone}
                />
            </div>

            <div className='home_row'>
                <Product
                    title="Up to 40% off on mobiles"
                    offer="See all offers"
                    img={phone}
                />
            </div>
        </div>
    )
}

export default MainCheckout
