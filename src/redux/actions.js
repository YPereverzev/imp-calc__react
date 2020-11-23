import {
  INCREMENT,
  DECREMENT,
  CLEARPOSITION,
  ADD_NEW_USER,
  ADD_FEEDBACK,
  LOAD_EXCHANGE_RATES,
  LOAD_PRODUCTS,
  LOAD_EXPERIENCE,
  LOAD_EXPORTERS,
  ADD_PRODUCT,
} from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const clearPosition = (id) => ({ type: CLEARPOSITION, payload: { id } });
export const addNewUser = (feedback) => ({
  type: ADD_NEW_USER,
  payload: {
    // допилить
  },
});

export const addFeedback = ({ feedbackInfo }) => {
  return {
    type: ADD_FEEDBACK,
    // DEV ONLY feedbackInfo:
    // name: feedbackInfo.name,
    // feedback: feedbackInfo.review,
    // exporterId: feedbackInfo.exporterId
    payload: feedbackInfo,
    generateId: ['feedbackId', 'userId'],
  };
};

export const loadExchangeRates = () => {
  return {
    type: LOAD_EXCHANGE_RATES,
    exchangeRatesAPI: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
  };
};

// const thunk allExportersLoad = () => {
//
// }

export const loadProducts = () => {
  return {
    type: LOAD_PRODUCTS,
    productsAPI: 'http://localhost:3001/api/normalizedProducts',
  };
};

export const loadExperience = () => {
  return {
    type: LOAD_EXPERIENCE,
    experienceAPI: 'http://localhost:3001/api/normalizedExperience',
  };
};

export const loadExporters = () => {
  return {
    type: LOAD_EXPORTERS,
    exportersAPI: 'http://localhost:3001/api/allExporters',
  };
};

export const addProduct = (newProductInfo) => {
  // console.log('ADD_PRODUCT');
   
  return {
    type: ADD_PRODUCT,
    payload: newProductInfo,
    generateId: ['id'],
  };
};
