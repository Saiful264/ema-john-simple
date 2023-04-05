import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

function Header() {
    return (
        <nav className='header'>
            <img src={logo} alt="" srcset="" />
            <div>
            <a href="/">Shop</a>
            <a href="/orders">Order</a>
            <a href="/inventory">Inventory</a>
            <a href="/login">Login</a>
            </div>
        </nav>
    );
    }
export default Header;