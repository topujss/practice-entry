// starting value
const initVal = '';

// create food reducer
const foodReducer = (state = initVal, { type, payload }) => {
  switch (type) {
    case 'CHANGE':
      return (state = payload);

    default:
      return state;
  }
};

// export me
export default foodReducer;
