import { combineReducers } from 'redux';
import cartReducer from './Reducers/CartReducers';
import authReducer from './Actions/authSlice'

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,

});

export default rootReducer;
