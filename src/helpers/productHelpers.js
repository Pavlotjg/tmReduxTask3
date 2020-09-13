import {ADD_ITEM_TO_CART, DELETE_ITEM_FROM_CART} from "../actions/cart.actions";
import {UPDATE_PRODUCT_AVAILABILITY} from "../actions/products.action";

export function addToCart(item, dispatch, amount) {
  if (item.available >= amount) {
    dispatch({
      type: ADD_ITEM_TO_CART,
      payload: {
        item,
        amount
      }
    });
    dispatch({
      type: UPDATE_PRODUCT_AVAILABILITY,
      payload: {
        item,
        amount: -amount
      }
    });
  }
}

export function removeFromCart(item, dispatch, amount) {
  dispatch({
    type: UPDATE_PRODUCT_AVAILABILITY,
    payload: {
      item,
      amount
    }
  });

  dispatch({
    type: DELETE_ITEM_FROM_CART,
    payload: {
      item,
      amount
    }
  })
}
