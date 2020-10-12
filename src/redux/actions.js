import { INCREMENT, DECREMENT, CLEARPOSITION, ADD_NEW_USER, ADD_FEEDBACK } from "./constants";

export const increment = (id) => ({ type : INCREMENT, payload: { id }});
export const decrement = (id) => ({ type : DECREMENT, payload: { id }});
export const clearPosition = (id) => ({ type : CLEARPOSITION, payload: { id }});
export const addNewUser = (feedback) => ({ type : ADD_NEW_USER, payload: {
        // что-то здесь не то
        name: feedback.name,
        name: feedback.name
        
    }});


export const addFeedback = ({ feedbackInfo }) => {
    return {
        type: ADD_FEEDBACK, 
        // DEV ONLY feedbackInfo:
        // name: feedbackInfo.name, 
        // feedback: feedbackInfo.review,
        // exporterId: feedbackInfo.exporterId
        payload: feedbackInfo,
        generateId: ['feedbackId', 'userId']
    }
};