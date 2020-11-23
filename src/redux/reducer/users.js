import { normalizedUsers } from '../../fixtures';
import { ADD_FEEDBACK } from '../constants';

export default (users = normalizedUsers, action) => {
  const { type, payload, userId } = action;

  switch (type) {
    case ADD_FEEDBACK:
      return [
        ...users,
        {
          id: userId,
          name: payload.name,
        },
      ];
    default:
      return users;
  }
};
