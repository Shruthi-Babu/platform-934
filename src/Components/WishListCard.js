import React from 'react';
import { useProductFilter } from '../context/ProductFilterContext';
import "./Stylesheets/HorizontalCard.css";

function WishListCard(props) {
    const {state, dispatch} = useProductFilter();
    const {className, id, title, availbility, price, categoryName, photo, rating} = props;
    console.log(title);
    // console.log("props:", props);
    console.log("wishlist:",state.wishlist);

    function handleDeleteFromWishList(e){
        //console.log("sending:",props);
        dispatch({type:'delete_from_wishlist', payload:props});
        //console.log("after:", state.wislist);
    }
    function handleMoveToCart(e){
        dispatch({type:'delete_from_wishlist', payload:props});
        dispatch({type:'add_to_cart', payload:props});
    }
    return (
        <div>
           
             <div className='card-horizontal'>
                <img  className='horizontal-card-img' src={require("../assets/floopy.jpg")} alt="card image"/>
                
                <div className='horizontal-card-body'>

                    <h3 className="horizontal-card-title">{title}</h3>                     

                    <p className="horizontal-card-desc">
                        {categoryName}
                    </p>

                    <p className="price-section">
                        Rs {price}
                    </p>

                    <button className="horizontal-card-footer move-cart" onClick={handleMoveToCart}>
                        <span className="footer-icon">
                        <i className="fa fa-shopping-cart"></i>
                        </span>
                        <p className="footer-text">Move to Cart</p>
                    </button>

                    <button className="horizontal-card-footer" onClick={handleDeleteFromWishList}>
                        <span className="footer-icon">
                        <i className="fa fa-trash"></i>
                        </span>
                        <p className="footer-text">Delete from Wishlist</p>
                    </button>
                </div> 

            </div> 
        </div>    
  )
}

export default WishListCard