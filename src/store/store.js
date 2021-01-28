import { createStore, combineReducers } from "redux";

import userReducer from "./reducers/user/userReducer";
import cartReducer from "./reducers/cart/cartReducer";

const reducers = combineReducers({
    user : userReducer,
    cart : cartReducer
});

const store = createStore(reducers);

export default store;