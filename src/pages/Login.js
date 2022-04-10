import React from 'react';
import { useProductFilter } from '../context/ProductFilterContext';
import {ReactComponent as UnderConstruction} from  "../assets/under_construction.svg"; 
import "../Components/Stylesheets/Login.css";

function Login() {
  return (
    <div>
      <UnderConstruction className="under-cons" />
      <p className='under-cons-text'>Feature Under Construction</p>
    </div>
  )
}

export default Login;