import { combineReducers } from 'redux';
import colorReducer from './colorReducer';
import counterReducer from './counterReducer';
import foodReducer from './foodReducer';

// create root reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  color: colorReducer,
  food: foodReducer,
});

// export me
export default rootReducer;
