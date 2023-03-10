import { todoTypes } from './actionTypes';
import { initVal } from './initValue';

const { TODO_REQ, TODO_REQ_SUCCESS, TODO_REQ_FAILED } = todoTypes;

// create todo reducer
const todoReducer = (state = initVal, { type, payload }) => {
  switch (type) {
    case TODO_REQ:
      return {
        ...state,
        loading: true,
      };

    case TODO_REQ_SUCCESS:
      return {
        ...state,
        loading: false,
        allTodo: payload,
      };

    case TODO_REQ_FAILED:
      return {
        ...state,
        loading: false,
        msg: 'Data validation failed',
      };

    default:
      return state;
  }
};

// export me
export default todoReducer;
