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
            return {...state,
                   category: {
                       ...state.category, 
                       [payload]: !state.category[payload]
                    }
                };
        case 'category-lp':
            Object.keys(state.category).forEach(function(key){ state.category[key] = false });
            return {...state, category:{...state.category, [payload]:true}};
        case "reset":
            return {
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
        case 'add_to_cart':            
            return {
                ...state, cart: [...state.cart, payload]
            };
        case 'add_to_wishlist':            
            return {
                ...state, wishlist: [...state.wishlist, payload]
            };
        case 'delete_from_wishlist':

            let filteredWishlist = state.wishlist.filter(c => c.id !== payload.id );
            return {
                ...state, wishlist:[...filteredWishlist]
            }
        case 'delete_from_cart':
            let filteredCart = state.cart.filter(c => c.id !== payload.id );
            return {
                ...state, cart:[...filteredCart]
            }
        default:
            return state;
    }
  };

  
export default filterReducer;