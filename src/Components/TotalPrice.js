import React from 'react';

import { useProductFilter } from '../context/ProductFilterContext';
import "./Stylesheets/TotalPrice.css";

function TotalPrice() {
    const {state} = useProductFilter();
    const cart = state.cart;
    const totalprice = cart.reduce(
        (prev, curr) => Number(prev) + Number(curr.price), 0);
    return (
        <div className='total-price-container'>
            <h3>Final Price</h3>
            {cart.length>0 && cart.map(c =>                 
                <p className='cart-item-title' >{c.title} <span className='cart-item-price'>Rs {c.price}</span></p>                
                
            )}
            <hr/>
           <p className='final-price'>Total: <span className='final-amt'> Rs {totalprice}</span></p>
        </div>
    )
}

export default TotalPrice