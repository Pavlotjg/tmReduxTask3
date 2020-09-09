import {createStore} from 'redux';
import shopReducer from './reducers/shop.reducer';

export default function setupStore() {
  return createStore(shopReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}