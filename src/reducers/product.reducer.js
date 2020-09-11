import {DECREASE_AVAILABLE_ITEMS, GET_PRODUCT_LIST, REFRESH_LIST_ITEM} from '../actions/products.action';

const initState = {
  products: [
    {
      productId: 1,
      name: 'iPhone 4s',
      price: 200,
      available: 2
    },
    {
      productId: 2,
      name: 'Nokia 2110',
      price: 600,
      available: 0
    },
    {
      productId: 3,
      name: 'Samsung s3',
      price: 345,
      available: 2
    },
    {
      productId: 4,
      name: 'LG G2',
      price: 90,
      available: 1
    },
    {
      productId: 5,
      name: 'Nokia 9930',
      price: 250,
      available: 3
    },
    {
      productId: 6,
      name: 'iPhone X',
      price: 123,
      available: 4
    },
    {
      productId: 7,
      name: 'Meizu m9',
      price: 656,
      available: 23
    },
    {
      productId: 8,
      name: 'Sonny 9',
      price: 564,
      available: 234
    },
    {
      productId: 9,
      name: 'iPhone 6 plus',
      price: 434,
      available: 7
    },
    {
      productId: 10,
      name: 'Alcatel noname',
      price: 123,
      available: 7
    }
  ]
};

export function productsReducer(state = initState, action) {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return state.products;

    case REFRESH_LIST_ITEM:
      const products = [...state.products];
      const newItem = action.payload;
      products.push(newItem);
      console.log(products);
      return {
        ...state,
        products
      };

    case DECREASE_AVAILABLE_ITEMS: {
      const products = [...state.products];
      const foundItem = products.find((item) => {
        return item.productId === action.payload.productId;
      });
      if (foundItem) {
        foundItem.available--;
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
