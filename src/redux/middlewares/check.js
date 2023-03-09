/**
 * checkMiddleware curry function
 * @info to check if middleware in between two arguments
 * const example = (store) => (next) => (action) => {}
 * store - also known as context; return getState() and dispatch()
 * next - this will let you go once in between action is done
 * action - let you access the reducer function; giving type and action;
 */
export const checkRedux = (store) => (next) => (action) => {
  // const { counter } = store.getState();
  // counter >= 5 ? console.log('Not anymore') : next(action);
  console.log('testing');
  next(action);
};
