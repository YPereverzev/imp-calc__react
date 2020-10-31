// import produce from 'immer';
import { 
    LOAD_EXCHANGE_RATES,
    SUCCESS,
    REQUEST,
    FAILURE,
} from '../constants';

const initialState  = {
    loading: {},
    error: null,
    loaded: {},
    entities: {},
}

export default (state = initialState, action) => {
    const { type, exRatesResponse, error } = action;
    debugger;

    switch (type) {
        case LOAD_EXCHANGE_RATES + REQUEST:
                debugger;
            
            return {
                ...state,
                loading: true,
                loaded: false,
                error: null
            }; 

        case LOAD_EXCHANGE_RATES + FAILURE:
            debugger;
            return {
                ...state,
                loading: false,
                loaded: false,
                error: error
            };
        
        case LOAD_EXCHANGE_RATES + SUCCESS:
            debugger;
            return {
                ...state,
                loading: false,
                loaded: true,
                error: null,
                entities: { ...exRatesResponse } 
            };

        default:
            return state;
    }
}