import {applyMiddleware, createStore} from 'redux';
import combineReducers from './reducers/index';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export default function setupStore() {
  return createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk)))
}
