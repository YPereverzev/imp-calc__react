import { INCREMENT, DECREMENT } from "../constants";


export default (state = {}, action) =>  {
    const { type, payload } = action; 
    // debugger;
    // state[payload.id]
    switch (type) {
        case INCREMENT:
            // state[payload.id] = 1;
            return {
                ...state, 
                [payload.id]: (state[payload.id] || 0) + 1
            };
        case DECREMENT:
            return {
                ...state, 
                [payload.id]: (state[payload.id] > 0) ? state[payload.id] - 1 : 0
            };
            
            // state[payload.id] > 0 ? state[payload.id] - 1 : 0;
        default:
            return state;
            // state[payload.id];
    }


    
}