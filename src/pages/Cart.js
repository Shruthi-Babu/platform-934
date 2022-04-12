import React from 'react'
import { useProductFilter } from '../context/ProductFilterContext'
import {ReactComponent as EmptyCart} from  "../assets/empty_cart.svg"; 
import "../Components/Stylesheets/Cart.css";
import CartCard from '../Components/CartCard';
import TotalPrice from '../Components/TotalPrice';

function Cart(){
  const {state} = useProductFilter();
  const cart = state.cart;
  console.log(cart);
  return (
    <div className='cart-container'>
      <h1>Your Shopping Cart</h1>      
      {
            cart.length===0 && 
            <div>
              <EmptyCart className="empty-cart" />
              <p className='empty-text'>Your cart looks empty!</p>
            </div>
      }
      <div className='cart-content'>

        <div className="horizontal-listing-cart" >
          {
            cart.length>0 && cart.map(p =>                     
              <CartCard className="product-item" key={p.id}  title={p.title} price={p.price} categoryName={p.categoryName} photo={p.photo}/>                   
            )
          }    
        </div> 
        {
          cart.length>0 && 
          <div className='total-price-section'>
            <TotalPrice />
          </div>
        }

      </div>           
    </div>        
)

}

export default Cart