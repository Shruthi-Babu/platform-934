import React from 'react'
import { useProductFilter } from '../context/ProductFilterContext';
import './Stylesheets/ProductCard.css';
import always from "../assets/always.jpg";

function ProductCard(props) {
  const {state, dispatch} = useProductFilter();
  const {id, title, availbility, price, categoryName, photo, rating} = props;

  
  function handleAddToCart(e){
    dispatch({type:'add_to_cart', payload: props});
    console.log(title);
  }

  function handleAddToWishList(e){
    dispatch({type:'add_to_wishlist', payload: props});
    console.log(props);
  }
  return (
    <div>
        <div className="card card-standard">
          <div >
            <img className="card-img" src={require(`../assets${photo}`)}/>
          </div>
        
          <div className="card-body">

            <div className="card-title">
              <h3 className='card-title-text'>{title}</h3>            
            </div>

            <p className="card-desc">
            {categoryName}            
            </p>
            
            <p className="price-section">
              Rs {price}
            </p>

            <div >              
                <p className="card-rating">{rating }<i className="fa fa-star filled" aria-hidden="true"></i></p>              
            </div>             
            
            <button className="card-footer" onClick={handleAddToCart}>
              <span className="footer-icon">
                <i className="fa fa-shopping-cart"></i>
              </span>
              <p className="footer-text">Add to Cart</p>
            </button>
          </div>
          {availbility==="Out Of Stock" && <span className="text-overlay">Sold Out</span>}
          <span className='wishlist-icon' onClick={handleAddToWishList}>
            <i className="fa fa-heart"></i>
          </span>
        </div>
    </div>
  )
}

export default ProductCard;