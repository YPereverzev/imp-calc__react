import { combineReducers } from 'redux';
import orderReducer from './order';
import importItems from './importitems';

export default combineReducers({
   order: orderReducer,
   importItems : importItems,
   foo: (infa = 'start') => infa + 'a'
}) 
// 