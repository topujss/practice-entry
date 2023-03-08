import { counterType } from './actionTypes';

const { INC, DEC, RESET, SET, RANDOM } = counterType;

/**
 * Increment
 * @info Higher the value one by one
 */
export const incCounter = () => {
  return { type: INC };
};

/**
 * Decrement
 * @info lower the value one by one
 */
export const decCounter = () => {
  return { type: DEC };
};

/**
 * Reset
 * @info Reset your value to zero
 */
export const resetCounter = () => {
  return { type: RESET };
};

/**
 * set
 * @info set the value to the specified value
 */
export const setCounter = () => {
  return { type: SET };
};

/**
 * Random
 * @info return a random number between 0 to 1000
 */
export const randomCounter = () => {
  return { type: RANDOM };
};
