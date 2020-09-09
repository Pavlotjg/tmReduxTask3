export const GET_CART_ITEMS = 'GET_CART_ITEMS';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const getCartItems = () => ({type: GET_CART_ITEMS});
export const removeFromCart = id => ({type: REMOVE_FROM_CART, productId: id});