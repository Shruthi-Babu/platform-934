import React from 'react'
import { useProductFilter } from '../context/ProductFilterContext';
import './Stylesheets/ProductCard.css';

function ProductCard(props) {
  const {dispatch} = useProductFilter();
  const {title, availbility, price, categoryName, photo, rating} = props;

  
  function handleAddToCart(e){
    dispatch({type:'add_to_cart', payload: props});
  }

  function handleAddToWishList(e){
    dispatch({type:'add_to_wishlist', payload: props});
  }
  return (
    <div>
        <div className="card card-standard">
          <div >
            <img className="card-img" src={require(`../assets${photo}`)} alt="wishlist card"/>
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