import React from 'react';
import { Link } from 'react-router-dom'
import CartIcon from './Cart/CartIcon'

const Navbar = () => {
    return(
        <nav>
            <div className="nav-wrapper container">
                <Link to="/" className="brand-logo">Shopping</Link>
                
                <ul className="right">
                    <li><Link to="/">Shop</Link></li>
                    <li><Link to="/table">Table</Link></li>
                    <li><Link to="/cart-table">Cart table</Link></li>
                    <li><CartIcon/></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;