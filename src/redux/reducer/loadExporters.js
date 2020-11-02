import { 
    LOAD_EXPORTERS,
    SUCCESS,
    REQUEST,
    FAILURE,
} from '../constants';

const initialState  = {
    loading: false,
    error: null,
    loaded: false,
    entities: {},
}

export default (state = initialState, action) => {

    const { type, eportersResponse, error } = action;
     ;

    switch (type) {
        case LOAD_EXPORTERS + REQUEST:
            return {
                ...state,
                loading: true,
                loaded: false,
                error: null
            }; 

        case LOAD_EXPORTERS + FAILURE:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: error
            };
        
        case LOAD_EXPORTERS + SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                error: null,
                entities: { ...eportersResponse } 
            };

        default:
            return state;
    }

}