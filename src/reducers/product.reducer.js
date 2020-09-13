import {UPDATE_PRODUCT_AVAILABILITY, GET_PRODUCT_LIST, ADD_PRODUCT} from '../actions/products.action';

const initState = {
  products: []
};

export function productsReducer(state = initState, action) {
  switch (action.type) {
    case GET_PRODUCT_LIST: {
      return {
        ...state,
        products: action.payload
      };
    }

    case ADD_PRODUCT: {
      const products = [...state.products];
      const newItem = action.payload;
      products.push(newItem);
      return {
        ...state,
        products
      };
    }

    case UPDATE_PRODUCT_AVAILABILITY: {
      const products = [...state.products];
      const foundItem = products.find((item) => {
        return item.productId === action.payload.item.productId;
      });
      if (foundItem) {
        foundItem.available += action.payload.amount;
      }
      return {
        ...state,
        products
      }
    }

    default:
      return state;
  }
}
