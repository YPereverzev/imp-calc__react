// import { normalizedExperience } from '../../fixtures';

import {
    REQUEST,
    SUCCESS,
    FAILURE,
    LOAD_EXPERIENCE
} from '../constants';

const initialState = {
    entities: {},
    loading: false,
    loaded: false,
    error: null
}

// normalizedExperience

export default (state = initialState, action) => {
     
    const { type, experienceResponse, error } = action;
    switch (type) {
        case LOAD_EXPERIENCE + REQUEST: 
            return {
                ...state,
                entities: {},
                loading: true,
                loaded: false,
                error: null
            }

        case LOAD_EXPERIENCE + SUCCESS: 
            return {
                ...state,
                entities: [...experienceResponse],
                loading: false,
                loaded: true,
                error: null
            }
            
        case LOAD_EXPERIENCE + FAILURE: 
            return {
                ...state,
                entities: {},
                loading: true,
                loaded: false,
                error: error
            }
        default:
            return state;
    }

}

