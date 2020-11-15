import { applyMiddleware, createStore } from 'redux';
import reducer from './reducer/reducer';
import { logger } from '../redux/middleware/logger';
import generateId from '../redux/middleware/generateid';
import exchangeRates from '../redux/middleware/exchangerates';
import { loadProducts } from '../redux/middleware/products';
import { loadExperience } from '../redux/middleware/experience';
import { loadExporters } from '../redux/middleware/exporters';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const enchaser = () =>
  applyMiddleware(
    thunk,
    loadExporters,
    loadProducts,
    loadExperience,
    exchangeRates,
    generateId,
    logger,
  );

export default createStore(reducer, composeWithDevTools(enchaser()));
