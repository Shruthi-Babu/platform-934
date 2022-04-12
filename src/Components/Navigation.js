import React from 'react'
import {Link} from "react-router-dom";
import { useProductFilter } from '../context/ProductFilterContext';

import "./Stylesheets/Navigation.css"

function Navigation() {
  const {state}= useProductFilter();
  let {cart, wishlist} = state;
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
                <Link className='nav-item' to="/wishlist">
                  <span className='icon'>
                    <i className="fa fa-heart"></i>
                    {wishlist.length>0 && <span className="badge-msg">{wishlist.length}</span>}
                  </span>
                  Wishlist
                </Link>
                <Link className='nav-item' to="/cart">
                  <span className="icon">
                    <i className="fa fa-shopping-cart" ></i>
                    {cart.length>0 && <span className="badge-msg">{cart.length}</span>}
                  </span>
                  Cart
                </Link>
              </div>
            </div>
        </nav>
    </div>
  )
}

export default Navigation