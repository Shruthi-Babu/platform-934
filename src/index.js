import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";
import {ProductContextProvider} from "../src/context/ProductContext";
import {ProductFilterContextProvider} from "../src/context/ProductFilterContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContextProvider>
        <ProductFilterContextProvider>
          <App />
        </ProductFilterContextProvider>        
      </ProductContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
