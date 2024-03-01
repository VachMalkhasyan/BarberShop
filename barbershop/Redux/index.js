import { combineReducers } from 'redux';
import cartReducer from './Reducers/CartReducers';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
