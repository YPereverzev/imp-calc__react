import { combineReducers } from 'redux';
import orderReducer from './order';
import importItems from './importitems';
import experience from './experience';
import products from './products';

export default combineReducers({
   order: orderReducer,
   importItems: importItems,
   experience: experience,
   products: products
}) 