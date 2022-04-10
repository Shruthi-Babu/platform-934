import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";
import {ProductContextProvider} from "../src/context/ProductContext";
import {ProductFilterContextProvider} from "../src/context/ProductFilterContext";
import {UserContextProvider} from "./context/UserContext";
import {CategoryContextProvider} from "./context/CategoryContext";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContextProvider>
        <ProductFilterContextProvider>
          <UserContextProvider>
            <CategoryContextProvider>
              <App />
            </CategoryContextProvider>            
          </UserContextProvider>          
        </ProductFilterContextProvider>        
      </ProductContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
