export const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST';
export const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';
export const DECREASE_AVAILABLE_ITEMS = 'DECREASE_AVAILABLE_ITEMS';

export const getProductList = () => ({type: GET_PRODUCT_LIST});
export const addNewProduct = payload => ({type: ADD_NEW_PRODUCT, product: payload});