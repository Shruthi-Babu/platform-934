import React from 'react'
import "../Components/Stylesheets/LandingPage.css";
import {useCategories} from "../context/CategoryContext";
import CategoryCard from '../Components/CategoryCard';
import logo from "../assets/platform.jpg";


function LandingPage() {

  const categories = useCategories();
  let categoryData = categories.categories;
  return (
    <div>
      <div>LandingPage</div>
      <div className='banner-section'>    
        <img className="logo" src={logo} alt="site-logo" />
      </div>
      <h1 className='category-heading'> Featured categories</h1>

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