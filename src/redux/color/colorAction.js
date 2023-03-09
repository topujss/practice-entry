import { colorType } from './actionTypes';

const {
  GRAY,
  RED,
  ORANGE,
  AMBER,
  YELLOW,
  LIME,
  GREEN,
  EMERALD,
  TEAL,
  CYAN,
  SKY,
  BLUE,
  INDIGO,
  VIOLET,
  PURPLE,
  FUCHSIA,
  PINK,
  ROSE,
} = colorType;

/**
 * Gray
 * @info set the color to gray
 */
export const grayColor = () => async (dispatch, getState) => {
  console.log(getState());
  return { type: GRAY };
};

/**
 * red
 * @info set the color to red
 */
export const redColor = () => {
  return { type: RED };
};

/**
 * Orange
 * @info set the color to gray
 */
export const orangeColor = () => {
  return { type: ORANGE };
};

/**
 * amber
 * @info set the color to amber
 */
export const amberColor = () => {
  return { type: AMBER };
};

/**
 * yellow
 * @info set the color to yellow
 */
export const yellowColor = () => {
  return { type: YELLOW };
};

/**
 * lime
 * @info set the color to lime
 */
export const limeColor = () => {
  return { type: LIME };
};

/**
 * green
 * @info set the color to green
 */
export const greenColor = () => {
  return { type: GREEN };
};

/**
 * emerald
 * @info set the color to emerald
 */
export const emeraldColor = () => {
  return { type: EMERALD };
};

/**
 * teal
 * @info set the color to teal
 */
export const tealColor = () => {
  return { type: TEAL };
};

/**
 * cyan
 * @info set the color to cyan
 */
export const cyanColor = () => {
  return { type: CYAN };
};

/**
 * sky
 * @info set the color to SKy
 */
export const skyColor = () => {
  return { type: SKY };
};

/**
 * blue
 * @info set the color to blue
 */
export const blueColor = () => {
  return { type: BLUE };
};

/**
 * indigo
 * @info set the color to indigo
 */
export const indigoColor = () => {
  return { type: INDIGO };
};

/**
 * violet
 * @info set the color to violet
 */
export const violetColor = () => {
  return { type: VIOLET };
};

/**
 * purple
 * @info set the color to purple
 */
export const purpleColor = () => {
  return { type: PURPLE };
};

/**
 * fuchsia
 * @info set the color to fuchsia
 */
export const fuchsiaColor = () => {
  return { type: FUCHSIA };
};

/**
 * pink
 * @info set the color to pink
 */
export const pinkColor = () => {
  return { type: PINK };
};

/**
 * rose
 * @info set the color to rose
 */
export const roseColor = () => {
  return { type: ROSE };
};
