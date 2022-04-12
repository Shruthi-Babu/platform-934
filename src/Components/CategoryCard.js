import React from 'react';
import {Link} from "react-router-dom";

import "./Stylesheets/CategoryCard.css";
import { useProductFilter } from '../context/ProductFilterContext';


function CategoryCard({categoryName, photo}) {

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