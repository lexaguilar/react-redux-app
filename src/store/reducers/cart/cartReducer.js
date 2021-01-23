const cart = []

function cartReducer(state = cart, action) {
    switch (action.type) {
            
        case 'ADD_ITEM':
      
            let items = [...state, ...action.payload];

            return items;

        case 'REMOVE_ITEM':

            return state.filter(x => x.id != action.payload);
    
        default:
            return state;
    }
}

export default cartReducer;