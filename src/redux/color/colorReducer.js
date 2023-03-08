// import { colorType } from '../actionTypes';
import { colorType } from './actionTypes';
import { initValue } from './initState';

// Distructure all types from color type
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

// reducer in redux
const colorReducer = (state = initValue, { type, payload }) => {
  switch (type) {
    case GRAY:
      return (state = 'bg-gray-500');
    case RED:
      return (state = 'bg-red-500');
    case ORANGE:
      return (state = 'bg-orange-500');
    case AMBER:
      return (state = 'bg-amber-500');
    case YELLOW:
      return (state = 'bg-yellow-500');
    case LIME:
      return (state = 'bg-lime-500');
    case GREEN:
      return (state = 'bg-green-500');
    case EMERALD:
      return (state = 'bg-emerald-500');
    case TEAL:
      return (state = 'bg-teal-500');
    case CYAN:
      return (state = 'bg-cyan-500');
    case SKY:
      return (state = 'bg-sky-500');
    case BLUE:
      return (state = 'bg-blue-500');
    case INDIGO:
      return (state = 'bg-indigo-500');
    case VIOLET:
      return (state = 'bg-violet-500');
    case PURPLE:
      return (state = 'bg-purple-500');
    case FUCHSIA:
      return (state = 'bg-fuchsia-500');
    case PINK:
      return (state = 'bg-pink-500');
    case ROSE:
      return (state = 'bg-rose-500');

    default:
      return state;
  }
};

export default colorReducer;
