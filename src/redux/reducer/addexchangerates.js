// import produce from 'immer';
import { LOAD_EXCHANGE_RATES, SUCCESS, REQUEST, FAILURE } from '../constants';

const initialState = {
  loading: false,
  error: null,
  loaded: false,
  entities: {},
};

export default (state = initialState, action) => {
  const { type, exRatesResponse, error } = action;
  switch (type) {
    case LOAD_EXCHANGE_RATES + REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null,
      };

    case LOAD_EXCHANGE_RATES + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: error,
      };

    case LOAD_EXCHANGE_RATES + SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: null,
        entities: [...exRatesResponse],
      };

    default:
      return state;
  }
};
