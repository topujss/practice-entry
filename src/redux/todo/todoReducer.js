import { todoTypes } from './actionTypes';
import { initVal } from './initValue';

const { TODO_REQ, TODO_REQ_SUCCESS, TODO_REQ_FAILED, TODO_ADD, TODO_ADD_SUCCESS, TODO_ADD_FAILED, TODO_DELETE } =
  todoTypes;

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
        error: payload,
      };

    case TODO_ADD:
      return {
        ...state,
        loading: true,
      };

    case TODO_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        allTodo: [...state.allTodo, payload],
      };

    case TODO_ADD_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case TODO_DELETE:
      return {
        ...state,
        allTodo: state.allTodo.filter((d) => d.id !== payload),
      };

    default:
      return state;
  }
};

// export me
export default todoReducer;
