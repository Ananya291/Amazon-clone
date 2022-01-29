import React from 'react'
import './MainCheckout.css'
import Header from './Header'
import Product from './Product'
import Product2 from './Product2'
import bannerimage from './banner-image2.jpg'
import phone from './phone.jpg'
import electronics from './electronics.jpg'
import appliances from './appliancess.png'
import stationary from './stationary.jpg'
import mask from './mask.jpg'
import lights from './lights.jpg'
import hp1 from './hp1.jpg'
import echo from './echo.jpg'
import firestick from './firestick.jpg'



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
                    title="Up to 60% off | Top deals on stationery supplies"
                    offer="See all offers"
                    img={stationary}
                />
                <Product
                    title="Masks and faceshields"
                    offer="See all offers"
                    img={mask}
                /><Product
                    title="Keep shopping for"
                    cost="₹1,349.00"
                    img={lights}
                    seller="??ATHARV DECOR 60-Watts Antique Metal 10 Lights Linear Cluster 
                          Chandelier Modern Glass Globe Hanging Light (Black)"
                />
            </div>

            <div className='home_row'>
                <Product2
                    title2="Up to 60% off | Refurbished products"
                    options="See more"
                    image={firestick}
                    
                    
                />
                {/* <Product2
                    image={echo}
                />
                <Product2
                     image={hp1}
                /> */}
            </div>
        </div>
    )
}

export default MainCheckout
