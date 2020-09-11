import {GET_CART_ITEMS, ADD_ITEM_TO_CART} from '../actions/cart.actions';

const initState = {
  inCart: []
};

export function cartReducer(state = initState, action) {
  switch (action.type) {
    case GET_CART_ITEMS:
      return state.inCart;
    case ADD_ITEM_TO_CART:
      //TODO: wtf
      const inCart = [...state.inCart];
      const foundItem = inCart.find((item) => {
        return item.productId === action.payload.productId
      });
      if (foundItem) {
        foundItem.count++;
      } else {
        const updatedItem = {
          productId: action.payload.productId,
          name: action.payload.name,
          price: action.payload.price,
          count: 1
        };
        inCart.push(updatedItem);
      }
      console.log(inCart);
      return {
        ...state,
        inCart
      };
    default:
      return state;
  }
}
