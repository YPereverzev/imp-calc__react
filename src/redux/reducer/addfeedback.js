// import { normalizedExperience } from '../../fixtures';
import { ADD_FEEDBACK } from '../constants';

const initialState ={
    
};

export default (state = initialState, action) => {
    const { type, payload, feedbackId, userId } = action;


    switch (type) {
        case ADD_FEEDBACK:
            const { review} = payload;
            return [
                ...state,  { 
                    id: feedbackId, managerId: userId, feedback:review 
                },

            ]
        default:
            return state;
    }
}