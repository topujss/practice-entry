import { legacy_createStore as createStore } from 'redux';
import rootReducer from './rootReducer';

// create only store
const store = createStore(rootReducer);

// export me
export default store;
