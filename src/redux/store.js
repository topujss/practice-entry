import { legacy_createStore as createStore } from 'redux';
import colorReducer from './colorReducer';
// import counterReducer from './counterReducer';

// create only store
const store = createStore(colorReducer);

// export me
export default store;
