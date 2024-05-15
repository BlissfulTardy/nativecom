
// IMPORT Redux
import { createStore, combineReducers } from 'redux';

// IMPORT Reducers
import cartReducer from './reducers/cartReducer';
import productReducer from './reducers/productReducer';

// ROOT REDUCER
const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
});

// STORE initiation
const store = createStore(rootReducer);

export default store;