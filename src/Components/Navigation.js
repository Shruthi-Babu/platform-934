import React from 'react'
import {Link} from "react-router-dom";
import "./Stylesheets/Navigation.css"

function Navigation() {
  return (
    <div>
        <nav>
            <div className='navigation-container'>
              <div className='left-nav'>
                <Link className='nav-item' to="/">Home</Link>
                <Link className='nav-item' to="/catalogue">Shop now</Link>
              </div>
              <div className='right-nav'>
                <Link className='nav-item' to="/login">Login</Link>
                <Link className='nav-item' to="/wishlist">Wishlist</Link>
                <Link className='nav-item' to="/cart">Cart</Link>
              </div>
            </div>
        </nav>
    </div>
  )
}

export default Navigation