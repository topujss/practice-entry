import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

// create only store
const store = createStore(rootReducer, composeWithDevTools());

// export me
export default store;
