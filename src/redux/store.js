import { applyMiddleware, createStore } from 'redux';
import reducer from './reducer/reducer';
import { logger } from '../redux/middleware/logger';
import generateId from '../redux/middleware/generateid'
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(reducer, composeWithDevTools(applyMiddleware(generateId, logger)));
// , user