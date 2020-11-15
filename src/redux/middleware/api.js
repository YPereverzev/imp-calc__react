export default (state) => (next) => async (action) => {
  if (action.CallAPI) return next(state);

  const { CallAPI, ...rest } = action;

  const response = await fetch(CallAPI).then((res) => res.json());
  next({ ...rest, response });
};
