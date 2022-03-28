import React from 'react'

function FilterSection() {
  return (
    <div>
        <div className="sorting">
    
            <legend>Sort by</legend>
            <input
                type="radio"
                name="sort"
                value="hightolow"
                // onChange={handleSortChange}
            />
            Price - High to Low
            <input
                type="radio"
                name="sort"
                value="lowtohigh"
                // onChange={handleSortChange}
            />
            Price - Low to high    
        </div>
        <div className="filter">
            
            <legend>Filter</legend>
            <input
                type="checkbox"
                name="filter"
                value="includeOOS"
                // onChange={handleFilterChange}
            />{" "}
            Include Out Of Stock
            <input
                type="checkbox"
                name="filter"
                value="fastdel"
                // onChange={handleFilterChange}
            />{" "}
            Fast Delivery
            
        </div>
    </div>
  )
}

export default FilterSection