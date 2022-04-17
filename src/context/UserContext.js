import { createContext, useContext, useReducer } from "react";
import userReducerFunc from './reducers/userReducerFunc';


const UserContext = createContext();

function UserContextProvider({children}){
    const userInitState = {
        cart:[],
        wishList:[]
    };
    
    const [state, dispatch] = useReducer(userReducerFunc, userInitState)

    return<UserContext.Provider value={{state, dispatch}}>
        {children}
    </UserContext.Provider>
}

const useUser = ()=> useContext(UserContext);

export {useUser, UserContextProvider};