import { ADD_PRODUCT } from '../constants';
const initialState = {};

export default (state = initialState, action) => {
  const { type, payload } = action;
  console.log(type, payload);
  switch (type) {
    default:
      return state;
  }
};
