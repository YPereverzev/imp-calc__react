import { v4 as uuidv4 } from 'uuid';
// import { ADD_NEW_USER } from '../constants';

export const user = (store) => (next) => (action) => {
  const { type /*payload*/ } = action;
  console.log('uuidv4(): ', uuidv4());

  switch (type) {
    // case ADD_NEW_USER:
    //     const newPayload = { ...payload, id: uuidv4()};
    //     next({ type, newPayload});
    default:
      next(action);
  }
};
