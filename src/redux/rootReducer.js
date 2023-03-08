import { combineReducers } from 'redux';

// color
import colorReducer from './color/colorReducer';

// counter
import counterReducer from './counter/counterReducer';

// food
import foodReducer from './food/foodReducer';

// create root reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  color: colorReducer,
  food: foodReducer,
});

// export me
export default rootReducer;
