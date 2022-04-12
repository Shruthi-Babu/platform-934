import React, { useState } from "react";
import { useProductFilter } from "../context/ProductFilterContext";
import "./Stylesheets/FilterSection.css";

function FilterSection() {
  const { state, dispatch } = useProductFilter();
  const [categoryChecked, setChecked] = useState(false);
  const [categoryAllChecked, setCategoryAllChecked] = useState(true);
  const { includeOOS,fastDelivery, category} = state;
  function handleRatingChange(event) {
    dispatch({ payload: event.target.value, type: "rating" });
  }

  function handleCategoryChange(event) {
    dispatch({ type: "category", payload: event.target.value });
    event.target.value === "IncludeAll"
      ? setCategoryAllChecked(!categoryAllChecked)
      : setChecked(!categoryChecked);
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

  function handleClearFilter(event) {
    dispatch({ type: "reset" });
  }

  return (
    <div className="filter-section">
      <h2 className="filter-main-heading">Filters</h2>
      <p onClick={handleClearFilter} className="btn clear-btn">
        Clear All
      </p>
      <div className="all-filters">
        <div className="sort filter">
          <strong className="filter-heading">Sort by</strong>
          <label>
            <input
              className="filter-item"
              type="radio"
              name="sort"
              value="hightolow"
              onChange={handleSortChange}
            />
            Price - High to Low
          </label>

          <label>
            <input
              className="filter-item"
              type="radio"
              name="sort"
              value="lowtohigh"
              onChange={handleSortChange}
            />
            Price - Low to high
          </label>
        </div>
        <div className="rate filter">
          <strong className="filter-heading">Rating</strong>
          <label>
            <input
              className="filter-item"
              type="radio"
              name="rating"
              value="all"
              onChange={handleRatingChange}
            />
            Include All
          </label>
          <label>
            <input
              className="filter-item"
              type="radio"
              name="rating"
              value="2"
              onChange={handleRatingChange}
            />
            2 stars and above
          </label>
          <label>
            <input
              className="filter-item"
              type="radio"
              name="rating"
              value="3"
              onChange={handleRatingChange}
            />
            3 stars and above
          </label>
          <label>
            <input
              className="filter-item"
              type="radio"
              name="rating"
              value="4"
              onChange={handleRatingChange}
            />
            4 stars and above
          </label>
          <label>
            <input
              className="filter-item"
              type="radio"
              name="rating"
              value="5"
              onChange={handleRatingChange}
            />
            5 stars
          </label>
        </div>
        <div className="other filter">
          <strong className="filter-heading">Filter</strong>
          <label>
            <input
              className="filter-item"
              type="checkbox"
              name="filter"
              value="includeOOS"
              onChange={handleFilterChange}
              checked={includeOOS}
            />
            Include Out Of Stock
          </label>
          <label>
            <input
              className="filter-item"
              type="checkbox"
              name="filter"
              value="fastdel"
              onChange={handleFilterChange}
              //checked={fastDelivery}
              checked={fastDelivery}
            />
            Fast Delivery
          </label>
        </div>
        <div className="category filter">
          <strong className="filter-heading">Category</strong>

          <label>
            <input
              className="filter-item"
              type="checkbox"
              name="filter"
              value="HARRY POTTER"
              checked={category["HARRY POTTER"]}
              onChange={handleCategoryChange}
            />
            Harry Potter
          </label>
          <label>
            <input
              className="filter-item"
              type="checkbox"
              name="filter"
              value="AVENGERS"
              checked={category["AVENGERS"]}
              onChange={handleCategoryChange}
            />
            Avengers
          </label>
          <label>
            <input
              className="filter-item"
              type="checkbox"
              name="filter"
              value="GAME OF THRONES"
              checked={category["GAME OF THRONES"]}
              onChange={handleCategoryChange}
            />
            Game Of Thrones
          </label>
          <label>
            <input
              className="filter-item"
              type="checkbox"
              name="filter"
              value="F.R.I.E.N.D.S."
              checked={category["F.R.I.E.N.D.S."]}
              onChange={handleCategoryChange}
            />
            F.R.I.E.N.D.S.
          </label>
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
