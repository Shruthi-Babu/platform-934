import React from 'react'
import {Link} from "react-router-dom";
import "./Stylesheets/Navigation.css"

function Navigation() {
  return (
    <div>
        <nav>
            <ul className='navigation-container'>
                <Link className='nav-item' to="/">Home</Link>
                <Link className='nav-item' to="/catalogue">Shop now</Link>
                <Link className='nav-item' to="/login">Login</Link>
                <Link className='nav-item' to="/wishlist">Wishlist</Link>
                <Link className='nav-item' to="/cart">Cart</Link>
            </ul>
        </nav>
    </div>
  )
}

export default Navigation