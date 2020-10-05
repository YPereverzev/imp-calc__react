import { applyMiddleware, createStore } from 'redux';
import reducer from './reducer/reducer';
import { logger } from '../redux/middleware/logger';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(reducer, composeWithDevTools(applyMiddleware(logger)));