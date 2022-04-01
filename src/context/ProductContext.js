import { createContext, useContext, useState, useEffect, useReducer } from "react";


const ProductContext = createContext({});

function ProductContextProvider ({children}){
    const [products, setProducts] = useState([]);   

    useEffect(()=>{
        (async ()=> {
            try {
                const response = await fetch('/api/products');
                const json = await response.json();
                setProducts(json.products);
            } catch (e) {
                console.error(e);
                setProducts([]);
            }  
        })();
    })
      

    return <ProductContext.Provider value={{products}}>
        {children}
    </ProductContext.Provider>
}

const useProduct = ()=> useContext(ProductContext);

export {useProduct, ProductContextProvider};