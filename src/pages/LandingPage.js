import React from 'react'
import "../Components/Stylesheets/LandingPage.css";
import {useCategories} from "../context/CategoryContext";
import { useProductFilter } from '../context/ProductFilterContext';
import CategoryCard from '../Components/CategoryCard';


function LandingPage() {

  const categories = useCategories();
  //const {state, dispatch} = useProductFilter();
  let categoryData = categories.categories;
  //console.log(JSON.stringify(categoryData));
  return (
    <div>
      <div>LandingPage</div>
      <div className='banner-section'>    
      </div>
      <h1> Featured categories</h1>

      <div className="categories">
        {categoryData.map(c => 
          <CategoryCard className="category-item" key={c._id} categoryName={c.categoryName} photo={c.photo}/>
        )
        }                    
      </div> 
    </div>
  )
}

export default LandingPage