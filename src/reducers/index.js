import {combineReducers} from "redux";

import {cartReducer} from "./cart.reducer";
import {productsReducer} from "./product.reducer";


export default  combineReducers({
  cart: cartReducer,
  products: productsReducer
});
