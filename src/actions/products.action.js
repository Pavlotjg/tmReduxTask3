export const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST';
export const UPDATE_PRODUCT_AVAILABILITY = 'UPDATE_PRODUCT_AVAILABILITY';
export const ADD_PRODUCT = 'ADD_PRODUCT';

export const asyncGetProducts = () => dispatch => {
  fetch('http://localhost:3000/products.json').then((res) => {
    return res.json();
  }).then((res) => {
    dispatch({type: GET_PRODUCT_LIST, payload: res.products})
  });
};
