import { foodTypes } from './actionTypes';

const { CHANGE } = foodTypes;

/**
 * change
 * @info update when changes are made to selection
 */
export const setBg = (payload) => {
  return { type: CHANGE, payload };
};
