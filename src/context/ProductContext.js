import { createContext, useContext, useState, useEffect } from "react";


const ProductContext = createContext({});

function ProductContextProvider ({children}){
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('/api/products', {method:"GET",})
        .then(res=>res.json())
        .then((response) => {
            console.log(response.products);
            setProducts(response.products);
        })    
      }, [])

    return <ProductContext.Provider value={{products}}>
        {children}
    </ProductContext.Provider>
}

const useProduct = ()=> useContext(ProductContext);

export {useProduct, ProductContextProvider};