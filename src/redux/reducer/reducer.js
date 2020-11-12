import { combineReducers } from 'redux';
import orderReducer from './order';
import importItems from './importitems';
import experience from './experience';
import products from './products';
import users from './users';
import addFeedback from './addfeedback';
import addExchangeRates from './addexchangerates';
import loadExporters from './loadExporters';
import addNewProduct from './addNewProduct';


export default combineReducers({
   order: orderReducer,
   importItems: importItems,
   experience: experience,
   products: products,
   users: users,
   addFeedback: addFeedback,
   addExchangeRates: addExchangeRates,
   allExporters: loadExporters,
   // addNewProduct: addNewProduct,
}) 