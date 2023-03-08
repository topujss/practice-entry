import { foodTypes } from './actionTypes';
import { initVal } from './initValue';

const { CHANGE } = foodTypes;

// create food reducer
const foodReducer = (state = initVal, { type, payload }) => {
  switch (type) {
    case CHANGE:
      return (state = payload);

    default:
      return state;
  }
};

// export me
export default foodReducer;
