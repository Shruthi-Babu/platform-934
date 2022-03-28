import { createContext, useContext, useReducer } from "react";
import filterReducer from "./reducers/filterReducer";

const ProductFilterContext = createContext();

function ProductFilterContextProvider ({children}) {
    const filterState = {sort: "asc", availability: "includeOOS", rating: "all"};
    const [state, dispatch]= useReducer(filterState, filterReducer);

    return <ProductFilterContext.Provider>
        {children}
    </ProductFilterContext.Provider>
}

const useProductFilter = ()=>useContext(ProductFilterContext);

export {useProductFilter, ProductFilterContextProvider};