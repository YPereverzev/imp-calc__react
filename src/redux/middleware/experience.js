// import experience from "../reducer/experience";
import { FAILURE, SUCCESS, REQUEST } from '../constants';

export const loadExperience = (state) => (next) => async (action) => {
  if (!action.experienceAPI) return next(action);

  const { type, experienceAPI, ...rest } = action;

  next({ ...rest, type: type + REQUEST });

  try {
    const experienceResponse = await fetch(experienceAPI).then((item) => item.json());
    next({ ...rest, type: type + SUCCESS, experienceResponse });
  } catch (error) {
    next({ ...rest, type: type + FAILURE, error });
  }
};
