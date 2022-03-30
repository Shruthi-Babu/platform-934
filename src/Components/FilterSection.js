import React, { useState } from 'react';
import {useProductFilter} from "../context/ProductFilterContext";

function FilterSection() {
    const {state, dispatch} = useProductFilter();    
    const [categoryChecked, setChecked] = useState(true);

    function handleRatingChange(event){
        dispatch({ payload: event.target.value, type: "rating" });
    }

    function handleCategoryChange(event){        
        dispatch({type: "category", payload: event.target.value});
        setChecked(!categoryChecked);
    }

    function handleSortChange(event) {
        dispatch({ payload: event.target.value, type: "sort" });
    }

    function handleFilterChange(event) {
        if (event.target.value === "includeOOS")
            dispatch({ type: "toggleInventory" });
        if (event.target.value === "fastdel") {
            dispatch({ type: "toggledelivery" });
        }
    }

    return (
        <div>
            <div className="sorting">    
                <legend>Sort by</legend>
                <input
                    type="radio"
                    name="sort"
                    value="hightolow"
                    onChange={handleSortChange}
                />
                Price - High to Low
                <input
                    type="radio"
                    name="sort"
                    value="lowtohigh"
                    onChange={handleSortChange}
                />
                Price - Low to high    
            </div>
            <div className="rating">    
                <legend>Rating</legend>
                <input
                    type="radio"
                    name="rating"
                    value="all"
                    onChange={handleRatingChange}
                />
                Include All
                <input
                    type="radio"
                    name="rating"
                    value="2"
                    onChange={handleRatingChange}
                />
                2 stars and above
                <input
                    type="radio"
                    name="rating"
                    value="3"
                    onChange={handleRatingChange}
                />
                3 stars and above 
                <input
                    type="radio"
                    name="rating"
                    value="4"
                    onChange={handleRatingChange}
                />
                4 stars and above
                <input
                    type="radio"
                    name="rating"
                    value="5"
                    onChange={handleRatingChange}
                />
                5 stars   
            </div>
            <div className="filter">                
                <legend>Filter</legend>
                <input
                    type="checkbox"
                    name="filter"
                    value="includeOOS"
                    onChange={handleFilterChange}
                />{" "}
                Include Out Of Stock
                <input
                    type="checkbox"
                    name="filter"
                    value="fastdel"
                    onChange={handleFilterChange}
                />{" "}
                Fast Delivery                
            </div>
            <div className="Category">                
                <legend>Category</legend>
                <input
                    type="checkbox"
                    name="filter"
                    value="Harry Potter"
                    defaultChecked={categoryChecked}
                    onChange={handleCategoryChange}
                />{" "}
                Harry Potter
                <input
                    type="checkbox"
                    name="filter"
                    value="Avengers"
                    defaultChecked={categoryChecked}
                    onChange={handleCategoryChange}
                />{" "}
                Avengers   
                <input
                    type="checkbox"
                    name="filter"
                    value="Game Of Thrones"
                    defaultChecked={categoryChecked}
                    onChange={handleCategoryChange}
                />{" "}
                Game Of Thrones
                <input
                    type="checkbox"
                    name="filter"
                    value="F.R.I.E.N.D.S."
                    defaultChecked={categoryChecked}
                    onChange={handleCategoryChange}
                />{" "}
                F.R.I.E.N.D.S.                
            </div>
        </div>
    )
}

export default FilterSection