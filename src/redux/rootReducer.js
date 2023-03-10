import { combineReducers } from 'redux';

// color
import colorReducer from './color/colorReducer';

// counter
import counterReducer from './counter/counterReducer';

// food
import foodReducer from './food/foodReducer';

// todo
import todoReducer from './todo/todoReducer';

// create root reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  color: colorReducer,
  food: foodReducer,
  todo: todoReducer,
});

// export me
export default rootReducer;
