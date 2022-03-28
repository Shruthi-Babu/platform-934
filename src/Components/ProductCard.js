import React from 'react'
import './Stylesheets/ProductCard.css';

function ProductCard(props) {
let title = props.title;
let availbility = props.availbility;
let price= props.price;
let categoryName = props.categoryName;
let photo = `../assets${props.photo}`;
let rating  = props.rating;
  return (
    <div>
        
        <div className="card card-standard">
      {/* <div className="card-img">
        <img src={require(photo)} alt="card image"/>          
      </div> */}
        
      <div className="card-body">

        <div className="card-title">
          <h3>{title}</h3>            
        </div>

        <p className="card-desc">
        {categoryName}
        </p>
        
        <p className="price-section">
          Rs {price}
        </p>

        <ul className="card-rating">
            <li><i className="fa fa-star" aria-hidden="true"></i></li>
        </ul>  

        <button className="card-footer">
          <span className="footer-icon">
            <i className="fa fa-shopping-cart"></i>
          </span>
          <p className="footer-text">Shop Now</p>
        </button>
      </div>
      {availbility==="Out Of Stock" && <span className="text-overlay">Sold Out</span>}
    </div>
    </div>
  )
}

export default ProductCard;