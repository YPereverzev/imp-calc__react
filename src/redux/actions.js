import { INCREMENT, DECREMENT, CLEARPOSITION } from "./constants";

export const increment = (id) => ({ type : INCREMENT, payload: { id }});
export const decrement = (id) => ({ type : DECREMENT, payload: { id }});
export const clearPosition = (id) => ({ type : CLEARPOSITION, payload: { id }});

