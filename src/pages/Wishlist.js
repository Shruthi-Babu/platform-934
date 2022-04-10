import React from 'react';
import { useProductFilter } from '../context/ProductFilterContext';
import {ReactComponent as EmptyWishList} from  "../assets/wishlist.svg"; 
import "../Components/Stylesheets/Wishlist.css";
import WishListCard from '../Components/WishListCard';


function Wishlist() {
  const {state, dispatch} = useProductFilter();
  const wishlist = state.wishlist;

  //console.log(wishlist);

  return (
    <div className='wishlist-container'>
        <h1>Your Wishlist</h1>      
        {wishlist.length===0 && 
            <div>
              <EmptyWishList className="empty-wishlist" />
              <p className='empty-text'>Add items in your wishlist to see them here  </p>
            </div>
        }
        <div className="horizontal-listing" >

          {wishlist.length>0 && wishlist.map(p =>                     
            <WishListCard className="product-item" key={p.id}  id={p.id} title={p.title} availbility={p.availbility} price={p.price} categoryName={p.categoryName} photo={p.photo} rating = {p.rating}/>                   
          )}
          
        </div>            
    </div>        
)
}


export default Wishlist;