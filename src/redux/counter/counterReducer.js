import { counterType } from './actionTypes';
import { initState } from './initState';

const { INC, DEC, RESET, SET, RANDOM } = counterType;

// create a reducer
const counterReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case INC:
      return (state = state + 1);

    case DEC:
      return (state = state - 1);

    case RESET:
      return (state = 0);

    case SET:
      return (state = 1000);

    case RANDOM:
      return (state = Math.floor(Math.random() * 1000));

    default:
      return state;
  }
};
export default counterReducer;
