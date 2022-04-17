import { createContext, useContext, useEffect, useState } from "react";

const CategoryContext = createContext();

function CategoryContextProvider({children}){
    const [categories, setCategories] = useState([]);
    useEffect(()=> {
        (async()=>{
            try{
                const response = await fetch('/api/categories');
                const json = await response.json();
                setCategories(json.categories);
            } catch(e){
                console.error("Failed to fetch category data");
            }
        })();
    }, [])
    return <CategoryContext.Provider value={{categories}}>
        {children}
    </CategoryContext.Provider>
}

const useCategories = ()=>useContext(CategoryContext);

export {useCategories, CategoryContextProvider}