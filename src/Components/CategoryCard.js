import React from 'react';
import "./Stylesheets/CategoryCard.css";
import { useProductFilter } from '../context/ProductFilterContext';
import {Link} from "react-router-dom";


function CategoryCard(props) {
    let categoryName = props.categoryName;
    let photo = props.photo;   
    const {dispatch} = useProductFilter();

    function handleSelectCategory(event){
        dispatch({type:"category-lp", payload: categoryName});        
    }
    return (
        <Link className='category-card' value={categoryName} onClick={handleSelectCategory} to="/catalogue">
            <img  src={require(`../assets${photo}`)} className="category-image" alt="category"/>
            <div className='category-name'>{categoryName}</div>
        </Link>
    )
}

export default CategoryCard