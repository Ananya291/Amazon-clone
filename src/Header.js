import React from 'react';
import amazonlogo from "./amazonlogo.png";
import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Header() {
    return (
        <nav className='header'>
            {/*amazon left logo*/}
            <Link to="/">
                <img className='header_logo'
                    src={amazonlogo}
                    alt='logo' />
            </Link>
            {/*Search bar and icon*/}
            <div className='header_search'>
                <input type="text" className='header_searchInput' />
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className='header_nav'>
                {/*link 1*/}
                <Link to="/Loginpage" className='header_link'>
                    <div className='header_option'>
                        <span className='header_optionlineone'>Hello,Ananya</span>
                        <span className='header_optionlinetwo'>Sign In</span>
                    </div>
                </Link>
                {/*link 2*/}
                <Link to="/Order" className='header_link'>
                    <div className='header_option'>
                        <span className='header_optionlineone'>Returns</span>
                        <span className='header_optionlinetwo'>& Orders</span>
                    </div>
                </Link>
                {/*link 3*/}
                <Link to="/" className='header_link'>
                    <div className='header_option'>
                        <span className='header_optionlineone'>Your</span>
                        <span className='header_optionlinetwo'>Prime</span>
                    </div>
                </Link>
                {/*link 4*/}
                <Link to="/checkout" className='header_link'>
                    <div className='header_optioncart'>
                        {/*shoping cart icon*/}
                        <AddShoppingCartIcon className='header_cart' />
                        {/*number of items in cart*/}
                        <span className='header_optionlinetwo header_cartCount'>Cart</span>
                    </div>
                </Link>
            </div>


        </nav>
    )
}

export default Header;

