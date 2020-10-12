import { normalizedExperience } from '../../fixtures';
import { ADD_FEEDBACK } from '../constants';
// import { arrToMap } from '../utils';

export default (state = normalizedExperience, action) => {
     ;
    const { type, payload, feedbackId, userId } = action;
    switch (type) {
        // case ADD_FEEDBACK2:
        //     debugger;
        //     const { exporterId, name, review} = payload;
        //     return [
        //         ...state, { 
        //             id: feedbackId, managerId: userId, feedback:review 
        //         },

        //     ]
            
        default:
            return normalizedExperience ;
    }

}

