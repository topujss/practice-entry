import axios from 'axios';
import { todoTypes } from './actionTypes';

const { TODO_REQ_SUCCESS } = todoTypes;

/**
 * getAllTodo
 * @info send api req to get data from server
 */
export const getAllTodo = () => async (dispatch) => {
  const url = `http://localhost:5000/allTodo`;
  try {
    await axios
      .get(url)
      .then((res) => {
        dispatch({ type: TODO_REQ_SUCCESS, payload: res.data });
      })
      .catch((err) => {});
  } catch (err) {
    console.log(err.message);
  }
};
