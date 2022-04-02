const filterReducer = (state, action) => {
    let {type, payload} = action;
    switch (type) {
        case "sort":
            return { ...state, sort: payload };
        case "toggleInventory":
            return { ...state, includeOOS: !state.includeOOS };
        case "toggledelivery":
            return { ...state, fastDelivery: !state.fastDelivery };
        case "rating":
            return {...state, rating: payload};
        case "category":
            return {...state, category: {...state.category, [payload]: !state.category[payload]}};
        default:
            return state;
    }
  };

  
export default filterReducer;