import { normalizedExperience } from '../../fixtures';
import { ADD_FEEDBACK } from '../constants';

export default (experience = normalizedExperience, action) => {
    const { type, payload, feedbackId, userId } = action;


    switch (type) {
        case ADD_FEEDBACK:
            const { review} = payload;
            return [
                ...experience, { 
                    id: feedbackId, managerId: userId, feedback:review 
                },

            ]
        default:
            return experience;
    }
}