import { createContext, useContext, useReducer } from "react";
import filterReducer from "./reducers/filterReducer";

const ProductFilterContext = createContext();

function ProductFilterContextProvider ({children}) {
    const filterState = {
        sort: "",
        includeOOS: false,
        rating: "all",
        fastDelivery : false,
        category: {
            "HARRY POTTER": true,
            "GAME OF THRONES":true,
            "AVENGERS": true,
            "F.R.I.E.N.D.S.": true
        },
        cart: [],
        wishlist: []
    };

    const [state, dispatch] = useReducer(filterReducer, filterState );


    return <ProductFilterContext.Provider value={{state, dispatch}}>
        {children}
    </ProductFilterContext.Provider>
}

const useProductFilter = ()=>useContext(ProductFilterContext);

export {useProductFilter, ProductFilterContextProvider};