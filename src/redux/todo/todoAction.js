import axios from 'axios';
import { todoTypes } from './actionTypes';

const { TODO_REQ, TODO_REQ_SUCCESS, TODO_REQ_FAILED, TODO_ADD, TODO_ADD_SUCCESS, TODO_ADD_FAILED, TODO_DELETE } =
  todoTypes;

/**
 * getAllTodo
 * @info send api req to get data from server
 */
export const getAllTodo = () => async (dispatch) => {
  const url = `http://localhost:5000/allTodo`;
  try {
    dispatch({ type: TODO_REQ });
    await axios
      .get(url)
      .then((res) => {
        dispatch({ type: TODO_REQ_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: TODO_REQ_FAILED, payload: 'Data is missing' });
      });
  } catch (err) {
    console.log(err.message);
  }
};

/**
 * addAllTodo
 * @info send api req to add data from server
 */
export const addAllTodo = (todo) => async (dispatch) => {
  try {
    dispatch({ type: TODO_ADD });
    await axios
      .post(`http://localhost:5000/allTodo`, { title: todo })
      .then((res) => {
        dispatch({ type: TODO_ADD_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: TODO_ADD_FAILED, payload: 'Todo add failed' });
      });
  } catch (err) {
    console.log(err.message);
  }
};

/**
 * deleteTodo
 * @info delete a single todo from everywhere
 */
export const deleteTodo = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/allTodo/${id}`).then((res) => {
      dispatch({ type: TODO_DELETE, payload: id });
    });
  } catch (error) {
    console.log(error.message);
  }
};
