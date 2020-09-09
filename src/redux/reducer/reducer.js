import { combineReducers } from 'redux'
import orderReducer from './order';


export default combineReducers({
    order: orderReducer,
    myTestFunc: () => {
        console.log('done');
        return 'Reduce done';
    }
}) 
// 