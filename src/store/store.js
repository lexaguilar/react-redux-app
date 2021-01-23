import { createStore, combineReducers } from "redux";

import userReducer from "./reducers/user/userReducer";
import cartReducer from "./reducers/cart/cartReducer";
import mailReducer from "./reducers/mail/mailReducer";

const reducers = combineReducers({
    user : userReducer,
    cart : cartReducer,
    mail : mailReducer
});

const store = createStore(reducers);

export default store;