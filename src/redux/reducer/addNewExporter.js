import {ADD_NEW_EXPORTER} from '../constants';

export default (state ={}, action) => {
    // debugger;
    const {type, payload} = action;
    switch (type) {
        case ADD_NEW_EXPORTER:
            debugger;
            return {
                ...state
            }
    
        default:
            return state;
    }


}
