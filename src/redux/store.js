import { legacy_createStore as createStore } from 'redux';
import counterReducer from './counterReducer';

// create only store
const store = createStore(counterReducer);

// export me
export default store;
