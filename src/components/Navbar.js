import React from 'react';
import { Link } from 'react-router-dom'
import CartIcon from './CartIcon'

const Navbar = ()=>{
    return(
        <nav>
            <div className="nav-wrapper container">
                <Link to="/" className="brand-logo">Shopping</Link>
                
                <ul className="right">
                    <li><Link to="/">Shop</Link></li>
                    <li><Link to="/cart">My cart</Link></li>
                    <li><CartIcon/></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;