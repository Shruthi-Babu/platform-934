import React from 'react';
import { useProductFilter } from '../context/ProductFilterContext';
import "./Stylesheets/HorizontalCard.css";

function CartCard(props) {
  const {dispatch} = useProductFilter();
  const {title, price, categoryName, photo} = props;
  console.log(title);
  function handleDeleteFromCart(e){
      dispatch({type:'delete_from_cart', payload:props});
  }
  function handleMoveToWishlist(e){
      dispatch({type:'delete_from_cart', payload:props});
      dispatch({type:'add_to_wishlist', payload:props});
  }
  return (
    <div>
       
         <div className='card-horizontal'>
            <img  className='horizontal-card-img' src={require(`../assets${photo}`)} alt="cart"/>
            
            <div className='horizontal-card-body'>

                <h3 className="horizontal-card-title">{title}</h3> 
                

                <p className="horizontal-card-desc">
                    {categoryName}
                </p>

                <p className="price-section">
                    Rs {price}
                </p>

                <button className="horizontal-card-footer move-cart" onClick={handleDeleteFromCart}>
                    <span className="footer-icon">
                    <i className="fa fa-trash"></i>
                    </span>
                    <p className="footer-text">Delete from Cart</p>
                </button>

                <button className="horizontal-card-footer delete-wislist" onClick={handleMoveToWishlist}>
                    <span className="footer-icon">
                    <i className="fa fa-heart"></i>
                    </span>
                    <p className="footer-text">Move to Wishlist</p>
                </button>
            </div> 

        </div> 
    </div>    
)
}

export default CartCard