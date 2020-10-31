// import produce from 'immer';
import { 
    LOAD_EXCHANGE_RATES,
    SUCCESS,
    REQUEST,
    FAILURE,
} from '../constants';

export default (state = {}, action) => {
    const { type, exRates } = action;
    const initialState  = {
        loading: {},
        error: null,
        loaded: {},
        entities: {},
    }
    switch (type) {
        case LOAD_EXCHANGE_RATES:
            debugger;
            return { 
                ...exRates
            }

        case LOAD_EXCHANGE_RATES + REQUEST:
            initialState.loading = true;
            initialState.loaded = false;
            initialState.error = null;
            return //{...state, exchangeRates: { ...initialState.entities } } 

        case LOAD_EXCHANGE_RATES + FAILURE:
            initialState.loading = false;
            initialState.loaded = false;
            initialState.error = 'error';
            return; 
        
        case LOAD_EXCHANGE_RATES + SUCCESS:
            initialState.loading = false;
            initialState.loaded = true;
            initialState.error = null;
            debugger;
            return {...state, exchangeRates: { ...exRates } } 


        default:
            return state;
    }
}