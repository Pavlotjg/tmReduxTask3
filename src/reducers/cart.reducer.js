import {GET_CART_ITEMS, ADD_ITEM_TO_CART, DELETE_ITEM_FROM_CART, CLEAR_CART} from '../actions/cart.actions';

const initState = {
  inCart: []
};

export function cartReducer(state = initState, action) {
  switch (action.type) {

    case GET_CART_ITEMS: {
      return state.inCart;
    }

    case ADD_ITEM_TO_CART: {
      const inCart = [...state.inCart];
      const foundItem = inCart.find((item) => {
        return item.productId === action.payload.item.productId
      });
      if (foundItem) {
        foundItem.count += action.payload.amount;
      } else {
        const updatedItem = {
          productId: action.payload.item.productId,
          name: action.payload.item.name,
          price: action.payload.item.price,
          count: action.payload.amount
        };
        inCart.push(updatedItem);
      }
      return {
        ...state,
        inCart
      }
    }

    case DELETE_ITEM_FROM_CART: {
      const inCart = [...state.inCart];
      const itemIndex = inCart.findIndex((elem) => {
        return elem.productId === action.payload.item.productId
      });
      const foundItem = inCart[itemIndex];
      foundItem.count -= action.payload.amount;
      if (foundItem.count === 0) {
        inCart.splice(itemIndex, 1)
      }
      return {
        ...state,
        inCart
      };
    }

    case CLEAR_CART: {
      return {
        ...state,
        inCart: []
      }
    }

    default:
      return state;
  }
}
