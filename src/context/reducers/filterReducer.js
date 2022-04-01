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
        case "reset":
            return {
                sort: "",
                includeOOS: false,
                rating: "all",
                fastDelivery : false,
                category: {
                    "Harry Potter": true,
                    "Game Of Thrones":true,
                    "Avengers": true,
                    "F.R.I.E.N.D.S.": true
                },
                cart: [],
                wishlist: []
            };
        default:
            return state;
    }
  };

  
export default filterReducer;